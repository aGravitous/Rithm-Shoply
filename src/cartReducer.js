import { ADD_TO_CART, REMOVE_FROM_CART, ADD_DISCOUNT } from './actionTypes';

// CONSIDER: same facts in two places. Consider object of ids. Frequency counter.
const INITIAL_STATE = { itemsInCart: {}, discount: 0 };

function cartReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: {
                    ...state.itemsInCart,
                    [action.id]: state.itemsInCart[action.id] ? state.itemsInCart[action.id] + 1 : 1
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                itemsInCart: {
                    ...state.itemsInCart,
                    [action.id]: state.itemsInCart[action.id] - 1
                }
            }

        case ADD_DISCOUNT:
            return {
                ...state,
                discount: action.discount
            }

        default:
            return state;
    }
}

export default cartReducer;