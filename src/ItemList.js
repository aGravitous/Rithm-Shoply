import React, { Component } from 'react';
import { addToCart, removeFromCart } from './actions'
import { connect } from 'react-redux';
import './ItemList.css';
import Item from './Item';
import db from './items.json'


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: db.items
        }
    }

    render() {
        const idSet = this.props.itemsInCart.reduce(
            (set, { id }) => set.add(id), 
            new Set())
        
        const itemsList = this.state.items.map(
            item => <Item key={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                handleAdd={() => this.props.addToCart(item)}
                handleRemove={() => this.props.removeFromCart(item.id)}
                showRemoveButton={ idSet.has(item.id) } />);

        return (
            <div>
                <h2>There are {this.props.itemsInCart.length} items in your cart</h2>
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