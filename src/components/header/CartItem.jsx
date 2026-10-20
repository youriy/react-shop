import IconButton from '@mui/material/IconButton';
import classes from './Header.module.scss';
import {formatPrice, getDiscountedPrice} from '../../utils/price.js';

const CartItem = ({item, onRemove}) => {
    const unitPrice = getDiscountedPrice(item.price, item.discountPercent);

    return (
        <div className={classes.cart__item}>
            <img className={classes.cart__image} src={item.images[0]} alt=""/>

            <div className={classes.cart__description}>
                <div className={classes.cart__name}>{item.title}</div>
                <div className={classes.cart__price}>
                    {formatPrice(unitPrice)} x {item.count}
                    <span className={classes.cart__total}>{' ' + formatPrice(unitPrice * item.count)}</span>
                </div>
            </div>

            <IconButton
                aria-label={`Remove ${item.title} from cart`}
                onClick={onRemove}
            >
                <img src="./img/icon-delete.svg" alt=""/>
            </IconButton>
        </div>
    );
};

export {CartItem};
