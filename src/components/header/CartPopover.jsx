import {useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import classes from './Header.module.scss';
import {CartItem} from './CartItem.jsx';
import {removeFromCart} from '../../store/cartSlice.js';
import {selectCartItems} from '../../store/selectors.js';

const CartPopover = ({id, open, anchorEl, onClose}) => {
    const items = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
            sx={{marginTop: 3}}
        >
            <div className={classes.cart__title}>Cart</div>

            {items.length > 0 ? (
                <>
                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={() => dispatch(removeFromCart(item.id))}
                        />
                    ))}

                    <div className={classes.cart__footer}>
                        <Button variant="contained" size="large" className={classes.cart__button}>
                            Checkout
                        </Button>
                    </div>
                </>
            ) : (
                <div className={classes.cart__empty}>Your cart is empty</div>
            )}
        </Popover>
    );
};

export {CartPopover};
