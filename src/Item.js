import React, { Component } from 'react';
import './Item.css'

class Item extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.currentNumberInCart !== this.props.currentNumberInCart;
    }

    showRemoveButton() {
        return (
            <button onClick={ this.props.handleRemove }> Remove </button>
        )
    }

    render() {
        const { name, price, image_url, handleAdd, currentNumberInCart, showQuantity } = this.props;
        
        return (
            <div className="item">
                <img src={ image_url } alt={ name } />
                <h3>{ name }: { `$${price}` }</h3>
                <button onClick={ handleAdd }> Add </button><br/>
                { currentNumberInCart ? this.showRemoveButton() : null}
                { showQuantity && <p>Quantity: { currentNumberInCart } </p> }
            </div>
        )
    }
}

export default Item;