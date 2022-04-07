import React from 'react';
import classes from './Main.module.scss';
import Button from '@mui/material/Button';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import IconButton from '@mui/material/IconButton';

const data = {
    brand: 'SNEAKER COMPANY',
    title: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.',
    price: 250,
    sale: 50
};

const Description = () => {

    return (
        <div className={classes.description}>
            <div className={classes.description__content}>
                <div className={classes.description__brand}>{data.brand}</div>
                <div className={classes.description__title}>{data.title}</div>
                <div className={classes.description__text}>{data.description}</div>
                <Price price={data.price} sale={data.sale} />
                <Purchase/>
            </div>
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
        <>
            <div className={classes.description__price}>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price*(sale/100))}
                <span className={classes.description__sale}>{sale}%</span>
            </div>
            <div className={classes.description__subprice}>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}
            </div>
        </>
    );
}


const Purchase = () => {

    return (

        <div className={classes.description__purchase}>
            <div className={classes.description__plus_minus}>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <img src={'./img/icon-minus.svg'}/>
                </IconButton>
                <div>
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