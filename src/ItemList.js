import React, { Component } from 'react';
import { addToCart, removeFromCart } from './actions'
import { connect } from 'react-redux';
import './ItemList.css';
import Item from './Item';

class ItemList extends Component {

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

    render() {
    
        const itemsList = this.props.items.map(
            item => <Item key={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                handleAdd={() => this.props.addToCart(item.id)}
                handleRemove={() => this.props.removeFromCart(item.id)}
                currentNumberInCart={ this.props.itemsInCart[item.id] } />);


        return (
            <div>
                <h2>There are {this.getItemCount()} items in your cart</h2>
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
)(ItemList);