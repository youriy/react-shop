import React, {useEffect} from 'react';
import classes from './Main.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const Slider = (props) => {
    const {images} = props;

    useEffect(() => {
        NativeFancybox.bind("[data-fancybox]", { infinite: false });

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return (
        <div className={classes.slider__container}>
            <Carousel
                showArrows={true}
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
                        <div
                            key={index}
                            data-fancybox="gallery"
                            data-src={value}
                        >
                            <img src={value} />
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
}

export {Slider}