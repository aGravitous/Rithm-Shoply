import { addToCart, removeFromCart } from './actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

describe('Test functionality of actions', () => {
    
    it('Returns an action for adding', () => {
        const item = {
            id: 1,
            name: 'test',
            price: 10.00,
            image_url: 'test.com'
        }

        expect(addToCart(item)).toEqual({ type: ADD_TO_CART, item: item });
    });

    it('Returns an action for removing', () => {
        expect(removeFromCart(5)).toEqual({ type: REMOVE_FROM_CART, id: 5 });
    });
});