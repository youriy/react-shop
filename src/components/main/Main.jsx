import React from 'react';
import classes from './Main.module.scss';
import {Slider} from "./Slider.jsx";
import {Description} from "./Description.jsx"

const data = {
    id: 11,
    brand: 'SNEAKER COMPANY',
    title: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.',
    price: 250,
    sale: 50,
    img: [
        './img/image-product-1.jpg',
        './img/image-product-2.jpg',
        './img/image-product-3.jpg',
        './img/image-product-4.jpg'
    ]
};

const Main = () => {

    return (
        <div className={`${classes.main}`}>
            <div className={classes.main__content}>
                <div className={classes.slider}>
                    <Slider images={data.img}/>
                </div>
                <div className={classes.description}>
                    <Description data={data}/>
                </div>
            </div>
        </div>
    );
}

export {Main}