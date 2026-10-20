export const selectCartItems = state => state.cart.items;

export const selectCartTotalCount = state => (
    state.cart.items.reduce((total, item) => total + item.count, 0)
);

export const selectProductQuantity = (state, productId) => (
    state.cart.items.find(item => item.id === productId)?.count ?? 0
);
