import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import cartReducer from './cartReducer';

describe("cartReducer functionality", function () {

    const actionAdd = {
        type: ADD_TO_CART,
        item: {
            id: 1,
            name: 'test',
            price: 5.00,
            image_url: 'test.com'
        }
    };

    const actionRemove = {
      type: REMOVE_FROM_CART,
      id: 2
    }

    test("Adds an item to state", function () {
        const INITIAL_STATE = { itemsInCart: [] };
        expect(cartReducer(INITIAL_STATE, actionAdd))
            .toEqual({
                itemsInCart: [{
                    id: 1,
                    name: 'test',
                    price: 5.00,
                    image_url: 'test.com'
                }]
            });
    });

    test("Removes an item from state", function () {
        const STATE_IN_USE = {
            itemsInCart: [
                {
                    id: 1,
                    name: 'test',
                    price: 5.00,
                    image_url: 'test.com'
                },
                {
                    id: 2,
                    name: 'test2',
                    price: 10.00,
                    image_url: 'test.net'
                },
                {
                    id: 2,
                    name: 'test2',
                    price: 10.00,
                    image_url: 'test.net'
                }
            ]
        };
        expect(cartReducer(STATE_IN_USE, actionRemove))
            .toEqual({
                itemsInCart: [
                    {
                        id: 1,
                        name: 'test',
                        price: 5.00,
                        image_url: 'test.com'
                    },
                    {
                        id: 2,
                        name: 'test2',
                        price: 10.00,
                        image_url: 'test.net'
                    },
                ]
            });
    });
});