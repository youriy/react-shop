import React from 'react';
import classes from './Main.module.scss';
import Button from '@mui/material/Button';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import IconButton from '@mui/material/IconButton';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../store/cardSlice";

const Description = (props) => {
    const {brand, title, description, price, sale} = props.data;

    return (
        <div className={classes.description__content}>
            <div className={classes.description__brand}>{brand}</div>
            <div className={classes.description__title}>{title}</div>
            <div className={classes.description__text}>{description}</div>
            <Price price={price} sale={sale} />
            <Purchase product={props.data}/>
        </div>
    );
}

export {Description}
export const NumberFormat = number => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number)

const Price = (props) => {
    const {price, sale} = props;

    if (sale === undefined || sale === 0) {
        return (
            <div className={classes.description__price}>
                {NumberFormat(price)}
            </div>
        );
    }

    return (
        <div className={classes.description__price_container}>
            <div className={classes.description__price}>
                {NumberFormat(price*(sale/100))}
                <span className={classes.description__sale}>{sale}%</span>
            </div>
            <div className={classes.description__subprice}>
                {NumberFormat(price)}
            </div>
        </div>
    );
}


const Purchase = (props) => {
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.card);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let product = items.find(item => item.id === props.product.id);

        if (product) {
            setCount(product.count);
        }
    }, []);

    const incrementCount = () => {
        if (count < 99) {
            setCount(prevState => prevState + 1);
        }
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(prevState => prevState - 1);
        }
    }
    
    const handleAddItem = () => {
        dispatch(addItem({...props.product, count: count}));
    }

    return (
        <div className={classes.description__purchase}>
            <div className={classes.description__plus_minus}>
                <IconButton
                    color="primary"
                    aria-label="delete to cart"
                    onClick={decrementCount}
                >
                    <img src={'./img/icon-minus.svg'}/>
                </IconButton>
                <div className={classes.count}>
                    {count}
                </div>
                <IconButton
                    color="primary"
                    aria-label="add to cart"
                    onClick={incrementCount}
                >
                    <img src={'./img/icon-plus.svg'}/>
                </IconButton>
            </div>
            <Button
                variant="contained"
                size="large"
                startIcon={<LocalGroceryStoreOutlinedIcon />}
                className={classes.description__button}
                onClick={handleAddItem}
            >
                Add to card
            </Button>
        </div>
    );
}