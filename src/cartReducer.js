import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

// CONSIDER: same facts in two places. Consider object of ids. Frequency counter.
const INITIAL_STATE = { itemsInCart: {} };

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

        default:
            return state;
    }
}

export default cartReducer;