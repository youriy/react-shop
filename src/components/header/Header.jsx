import {useState} from 'react';
import {useSelector} from 'react-redux';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import classes from './Header.module.scss';
import {CartPopover} from './CartPopover.jsx';
import {NavDrawer} from './NavDrawer.jsx';
import {navItems} from '../../data/navItems.js';
import {selectCartTotalCount} from '../../store/selectors.js';

const Header = () => {
    const [cartAnchorEl, setCartAnchorEl] = useState(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const cartCount = useSelector(selectCartTotalCount);
    const isCartOpen = Boolean(cartAnchorEl);

    const openCart = event => setCartAnchorEl(event.currentTarget);
    const closeCart = () => setCartAnchorEl(null);

    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
                <IconButton
                    className={classes.header__mobilenav}
                    aria-label="Open navigation menu"
                    onClick={() => setIsNavOpen(true)}
                >
                    <img src="img/icon-menu.svg" alt=""/>
                </IconButton>

                <div className={classes.header__logo}>
                    <img src="img/logo.svg" alt="Sneaker Company"/>
                </div>

                {navItems.map(item => (
                    <button key={item} type="button" className={classes.header__navitem}>
                        {item}
                    </button>
                ))}
            </div>

            <div className={classes.header__nav}>
                <IconButton
                    className={classes.header__cart}
                    aria-label="Open cart"
                    aria-describedby={isCartOpen ? 'cart-popover' : undefined}
                    onClick={openCart}
                >
                    <Badge badgeContent={cartCount} color="primary">
                        <img src="img/icon-cart.svg" alt=""/>
                    </Badge>
                </IconButton>

                <img className={classes.header__userimg} src="img/image-avatar.png" alt="User profile"/>
            </div>

            <CartPopover
                id="cart-popover"
                open={isCartOpen}
                anchorEl={cartAnchorEl}
                onClose={closeCart}
            />

            <NavDrawer open={isNavOpen} onClose={() => setIsNavOpen(false)}/>
        </div>
    );
};

export {Header};
