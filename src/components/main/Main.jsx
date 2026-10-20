import classes from './Main.module.scss';
import {Slider} from './Slider.jsx';
import {Description} from './Description.jsx';
import {product} from '../../data/product.js';

const Main = () => (
    <div className={classes.main}>
        <div className={classes.main__content}>
            <div className={classes.slider}>
                <Slider images={product.images}/>
            </div>
            <div className={classes.description}>
                <Description product={product}/>
            </div>
        </div>
    </div>
);

export {Main};
