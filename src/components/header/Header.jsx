import React from 'react';
import classes from './Header.module.scss';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const navItems = [
    'Collections',
    'Men',
    'Women',
    'About',
    'Contact'
];

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggleDrawer, setToggleDrawer] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={`${classes.header}`}>
            <div className={classes.header__nav}>
                <IconButton className={classes.header__mobilenav} onClick={() => setToggleDrawer(true)}>
                    <img src="img/icon-menu.svg"/>
                </IconButton>
                <div className={classes.header__logo}>
                   <img src="img/logo.svg"/>
                </div>
                {navItems.map(value => <div key={value} className={classes.header__navitem}>{value}</div>)}
            </div>
            <div className={classes.header__nav}>
                <IconButton className={classes.header__cart} aria-describedby={id} onClick={handleClick}>
                    <img src="img/icon-cart.svg"/>
                </IconButton>
                <div>
                    <img className={classes.header__userimg} src="img/image-avatar.png"/>
                </div>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{marginTop: 3}}
            >
                <div className={classes.bucket__title}>Card</div>
                <div className={classes.bucket__body}>Your card is empty</div>
            </Popover>

            <Drawer
                anchor="left"
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
            >
                <div className={classes.drawer}>
                    <IconButton className={classes.header__mobilenav} onClick={() => setToggleDrawer(false)}>
                        <img src="img/icon-close.svg"/>
                    </IconButton>
                    <List>
                        {navItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} className={classes.drawer__text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export {Header}