const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export const formatPrice = value => currencyFormatter.format(value);

// Цена со скидкой: discountPercent — процент скидки от price.
export const getDiscountedPrice = (price, discountPercent = 0) => (
    discountPercent > 0 ? price * (discountPercent / 100) : price
);
