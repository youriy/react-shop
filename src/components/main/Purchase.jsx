import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import classes from './Main.module.scss';
import {addToCart} from '../../store/cartSlice.js';
import {selectProductQuantity} from '../../store/selectors.js';

const MIN_QUANTITY = 0;
const MAX_QUANTITY = 99;

const Purchase = ({product}) => {
    const dispatch = useDispatch();
    const quantityInCart = useSelector(state => selectProductQuantity(state, product.id));
    const [quantity, setQuantity] = useState(quantityInCart);

    // Количество в корзине — источник истины: если товар изменили в попапе корзины,
    // счётчик в блоке покупки подтягивает актуальное значение.
    useEffect(() => {
        setQuantity(quantityInCart);
    }, [quantityInCart, product.id]);

    const decreaseQuantity = () => setQuantity(current => Math.max(MIN_QUANTITY, current - 1));
    const increaseQuantity = () => setQuantity(current => Math.min(MAX_QUANTITY, current + 1));
    const handleAddToCart = () => dispatch(addToCart({...product, count: quantity}));

    return (
        <div className={classes.description__purchase}>
            <div className={classes.description__plus_minus}>
                <IconButton aria-label="Decrease quantity" onClick={decreaseQuantity}>
                    <img src="./img/icon-minus.svg" alt=""/>
                </IconButton>

                <div className={classes.description__count}>{quantity}</div>

                <IconButton aria-label="Increase quantity" onClick={increaseQuantity}>
                    <img src="./img/icon-plus.svg" alt=""/>
                </IconButton>
            </div>

            <Button
                variant="contained"
                size="large"
                startIcon={<LocalGroceryStoreOutlinedIcon/>}
                className={classes.description__button}
                onClick={handleAddToCart}
            >
                Add to cart
            </Button>
        </div>
    );
};

export {Purchase};
