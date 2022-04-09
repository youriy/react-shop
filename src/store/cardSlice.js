import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        deleteItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        incrementItemCount(state, action) {
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.count++;
                }
            });
        },
        decrementItemCount(state, action) {
            state.items = state.items.filter(item => {
               if (item.id === action.payload && item.count > 0) {
                   item.count--;
               }
            });
        }
    }
});

export default cardSlice.reducer
export const {addItem, deleteItem, decrementItemCount, incrementItemCount} = cardSlice.actions