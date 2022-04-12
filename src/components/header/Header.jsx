import React from 'react';
import classes from './Header.module.scss';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import {useSelector, useDispatch} from "react-redux";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {NumberFormat} from '../main/Description.jsx'
import {deleteItem} from "../../store/cardSlice";
import Button from "@mui/material/Button";

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
    const [badge, setBadge] = React.useState(0);
    const {items} = useSelector(state => state.card);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        let count = 0

        if (items.length > 0) {
            items.forEach(item => {
                count += item.count;
            })
        }

        setBadge(count);

    }, [items]);

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
                    <Badge badgeContent={badge} color="primary">
                        <img src="img/icon-cart.svg"/>
                    </Badge>
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
                {items.length > 0 ? (
                    <div>
                        <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}>
                            {items.map(item =>
                                <ListItem
                                    key={item.id}
                                    alignItems="flex-start"
                                    secondaryAction={
                                        <IconButton
                                            onClick={() => dispatch(deleteItem(item.id))}
                                        >
                                            <img src={'./img/icon-delete.svg'}/>
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar variant="rounded" alt={item.title} src={item.img[0]} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={
                                            <React.Fragment>
                                                {NumberFormat(item.sale > 0 ? item.price*(item.sale/100) : item.price)} x {item.count}
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {' ' + NumberFormat((item.sale > 0 ? item.price*(item.sale/100) : item.price)*item.count)}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            )}
                        </List>
                        <div className={classes.checkout}>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.checkout__button}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={classes.bucket__body}>Your card is empty</div>
                )}
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