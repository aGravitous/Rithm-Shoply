import React, { Component } from 'react';
import { addToCart, removeFromCart, addDiscount } from './actions'
import { connect } from 'react-redux';
import Item from './Item';
import DiscountForm from './DiscountForm'

class Cart extends Component {

    static defaultProps = {
        discounts: {
            REMOVE10: .1,
            REMOVE20: .2,
            REMOVE30: .3
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            discount: null
        }
        this.applyDiscount = this.applyDiscount.bind(this);
    }

    applyDiscount(code) {

        if (this.props.discount !== 0) { throw new Error("Discount code has already been applied") }

        const { discounts } = this.props;

        if (discounts[code]) {
            this.props.addDiscount(discounts[code]);
            return `Your ${discounts[code]*100}% discount has been applied!`;
        } else {
            throw new Error("Invalid discount code")
        }

    }

    getItemTotals() {
        const { itemsInCart, items } = this.props;
        let count = 0;
        let price = 0;

        for (let key in itemsInCart) {
            count += itemsInCart[key];
        }

        items.forEach(item => { price += (itemsInCart[item.id] || 0) * item.price });
        price = (price - price * this.props.discount).toFixed(2);

        return { count, price };
    }

    getCartItems() {
        const { items, itemsInCart } = this.props;
        return items.filter(item => itemsInCart[item.id])
    }

    render() {

        const itemsList = this.getCartItems().map(
            item => <Item key={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                handleAdd={() => this.props.addToCart(item.id)}
                handleRemove={() => this.props.removeFromCart(item.id)}
                currentNumberInCart={this.props.itemsInCart[item.id]}
                showQuantity={true} />);

        const itemTotals = this.getItemTotals();

        return (
            <div>
                <h2>Number of items: {itemTotals.count} Total: ${itemTotals.price}</h2>
                {this.state.discountError && <p>Discount has already been applied</p>}
                <DiscountForm handleDiscount={this.applyDiscount} />
                <div className="ItemList">
                    {itemsList}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemsInCart: state.itemsInCart,
        discount: state.discount,
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    addDiscount
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);