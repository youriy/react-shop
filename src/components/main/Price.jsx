import classes from './Main.module.scss';
import {formatPrice, getDiscountedPrice} from '../../utils/price.js';

const Price = ({price, discountPercent = 0}) => {
    if (!discountPercent) {
        return (
            <div className={classes.description__price}>
                {formatPrice(price)}
            </div>
        );
    }

    return (
        <div className={classes.description__price_container}>
            <div className={classes.description__price}>
                {formatPrice(getDiscountedPrice(price, discountPercent))}
                <span className={classes.description__sale}>{discountPercent}%</span>
            </div>
            <div className={classes.description__subprice}>
                {formatPrice(price)}
            </div>
        </div>
    );
};

export {Price};
