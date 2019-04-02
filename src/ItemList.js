import React, { Component } from 'react';
import { addToCart, removeFromCart } from './actions'
import { connect } from 'react-redux';
import './ItemList.css';
import Item from './Item';


class ItemList extends Component {
    render() {
        const itemsList = this.props.itemsInCart.map(
            item => <Item key={item.id}
                          name={item.name}
                          price={item.price}
                          image_url={item.image_url}
                          handleAdd={() => this.props.addToCart(item)}
                          handRemove={() => this.props.removeFromCart(item.id)}
                          />);

        return (
            <div>
                <p>There are {this.props.itemsInCart.length} items in your cart</p>
                {itemsList}
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
)(ItemList);