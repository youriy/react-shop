import {useEffect} from 'react';
import {Carousel} from 'react-responsive-carousel';
import Fab from '@mui/material/Fab';
import {Fancybox as NativeFancybox} from '@fancyapps/ui/dist/fancybox.esm.js';
import classes from './Main.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fancyapps/ui/dist/fancybox.css';

const ARROW_ICONS = {
    next: './img/icon-next.svg',
    prev: './img/icon-previous.svg'
};

const ARROW_LABELS = {
    next: 'Next image',
    prev: 'Previous image'
};

const SliderArrow = ({direction, onClick}) => (
    <Fab
        size="small"
        className={`control-slider-button control-slider-button_${direction}`}
        aria-label={ARROW_LABELS[direction]}
        onClick={onClick}
    >
        <img src={ARROW_ICONS[direction]} alt=""/>
    </Fab>
);

const Slider = ({images}) => {
    useEffect(() => {
        NativeFancybox.bind('[data-fancybox]', {infinite: false});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return (
        <div className={classes.slider__container}>
            <Carousel
                showArrows
                showIndicators={false}
                showStatus={false}
                swipeable={false}
                animationHandler="fade"
                renderArrowNext={(onClick, hasNext) => (
                    hasNext ? <SliderArrow direction="next" onClick={onClick}/> : null
                )}
                renderArrowPrev={(onClick, hasPrev) => (
                    hasPrev ? <SliderArrow direction="prev" onClick={onClick}/> : null
                )}
                renderThumbs={() => images.map(image => (
                    <div key={image}>
                        <img src={image} alt=""/>
                    </div>
                ))}
            >
                {images.map((image, index) => (
                    <div key={image} data-fancybox="gallery" data-src={image}>
                        <img src={image} alt={`Sneakers, view ${index + 1}`}/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export {Slider};
