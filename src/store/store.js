import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import {loadCartItems, saveCartItems} from './cartStorage.js';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        cart: {items: loadCartItems()},
    },
});

// Персистентность корзины вынесена из редьюсеров: они должны оставаться чистыми.
let previousItems = store.getState().cart.items;

store.subscribe(() => {
    const items = store.getState().cart.items;

    if (items !== previousItems) {
        previousItems = items;
        saveCartItems(items);
    }
});
