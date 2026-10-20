import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // Добавляет товар в корзину, обновляет количество, либо удаляет его при count = 0.
        addToCart(state, action) {
            const {id, count} = action.payload;
            const index = state.items.findIndex(item => item.id === id);

            if (count === 0) {
                state.items = state.items.filter(item => item.id !== id);
                return;
            }

            if (index === -1) {
                state.items.push(action.payload);
                return;
            }

            state.items[index].count = count;
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
