import React from 'react';
import classes from './Main.module.scss';
import Button from '@mui/material/Button';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import IconButton from '@mui/material/IconButton';

const Description = (props) => {
    const {brand, title, description, price, sale} = props.data;

    return (
        <div className={classes.description__content}>
            <div className={classes.description__brand}>{brand}</div>
            <div className={classes.description__title}>{title}</div>
            <div className={classes.description__text}>{description}</div>
            <Price price={price} sale={sale} />
            <Purchase/>
        </div>

    );
}

export {Description}


const Price = (props) => {
    const {price, sale} = props;

    if (sale === undefined || sale === 0) {
        return (
            <div className={classes.description__price}>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}
            </div>
        );
    }

    return (
        <div className={classes.description__price_container}>
            <div className={classes.description__price}>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price*(sale/100))}
                <span className={classes.description__sale}>{sale}%</span>
            </div>
            <div className={classes.description__subprice}>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}
            </div>
        </div>
    );
}


const Purchase = () => {

    return (
        <div className={classes.description__purchase}>
            <div className={classes.description__plus_minus}>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <img src={'./img/icon-minus.svg'}/>
                </IconButton>
                <div className={classes.count}>
                    0
                </div>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <img src={'./img/icon-plus.svg'}/>
                </IconButton>
            </div>
            <Button variant="contained" size="large"  startIcon={<LocalGroceryStoreOutlinedIcon />} className={classes.description__button}>
                Add to card
            </Button>
        </div>
    );
}