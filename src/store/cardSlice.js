import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        items: JSON.parse(localStorage.getItem('product')) || []
    },
    reducers: {
        addItem(state, action) {
            let index = state.items.findIndex(it => it.id === action.payload.id);

            if (index === -1 && action.payload.count > 0) {
                state.items.push(action.payload);
            } else if (action.payload.count === 0) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                state.items[index].count = action.payload.count;
            }

            localStorage.setItem('product', JSON.stringify(state.items))
        },
        deleteItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
});

export default cardSlice.reducer
export const {addItem, deleteItem} = cardSlice.actions