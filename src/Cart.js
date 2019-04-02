import React, { Component } from 'react';
import { addToCart, removeFromCart } from './actions'
import { connect } from 'react-redux';
import Item from './Item';

class Cart extends Component {

    // Fixme Use a Map!
    getItemCount() {
        const { itemsInCart } = this.props;
        let itemCount = 0;
        
        for (let key in itemsInCart ) {
            if (itemsInCart[key]) {
                itemCount += itemsInCart[key];
            }
        }
        return itemCount;
    }

    getCartItems() {
        const { items, itemsInCart } = this.props;
        return items.filter( item => itemsInCart[item.id])
    }

    render() {
    
        const itemsList = this.getCartItems().map(
            item => <Item key={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                handleAdd={() => this.props.addToCart(item.id)}
                handleRemove={() => this.props.removeFromCart(item.id)}
                currentNumberInCart={ this.props.itemsInCart[item.id] } 
                showQuantity={true} />);


        return (
            <div>
                <h2>Total items in cart: {this.getItemCount()}</h2>
                <div className="ItemList">
                    {itemsList}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemsInCart: state.itemsInCart
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);