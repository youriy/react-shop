import classes from './Main.module.scss';
import {Price} from './Price.jsx';
import {Purchase} from './Purchase.jsx';

const Description = ({product}) => {
    const {brand, title, description} = product;

    return (
        <div className={classes.description__content}>
            <div className={classes.description__brand}>{brand}</div>
            <h1 className={classes.description__title}>{title}</h1>
            <p className={classes.description__text}>{description}</p>
            <Price price={product.price} discountPercent={product.discountPercent}/>
            <Purchase product={product}/>
        </div>
    );
};

export {Description};
