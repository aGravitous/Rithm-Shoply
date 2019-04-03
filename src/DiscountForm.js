import React, { Component } from 'react';

class DiscountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discountCode: "",
            error: null,
            message: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        try {
            evt.preventDefault();
            let message = this.props.handleDiscount(this.state.discountCode);
            this.setState({
                discountCode: "",
                error: null, 
                message
            })
        } catch (err) {
            console.log(err)
            this.setState({
                discountCode: "",
                error: err.message,
                message: null
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="discountCode">Discount Code:</label>
                <input type="password" id="discountCode" name="discountCode" value={this.state.discountCode} onChange={this.handleChange}></input>
                <button>Get dat discount!</button>
                {this.state.error && <p>{this.state.error}</p>}
                {this.state.message && <p>{this.state.message}</p>}
            </form>
        )
    }
}

export default DiscountForm;