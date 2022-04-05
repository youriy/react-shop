import React from 'react';
import classes from './Main.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = [
    './img/image-product-1.jpg',
    './img/image-product-2.jpg',
    './img/image-product-3.jpg',
    './img/image-product-4.jpg'
];

const Slider = () => {

    return (
        <div className={classes.slider}>
            <div className={classes.slider__container}>
                <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    animationHandler={"fade"}
                    swipeable={false}
                    renderThumbs={() => {
                        return (
                            images.map((value, index) =>
                                <div key={index}>
                                    <img src={value} />
                                </div >
                            )
                        );
                    }}
                >
                    {
                        images.map((value, index) =>
                            <a key={index}>
                                <img src={value} />
                            </a >
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
}
export {Slider}