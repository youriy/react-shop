import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import classes from './Header.module.scss';
import {navItems} from '../../data/navItems.js';

const NavDrawer = ({open, onClose}) => (
    <Drawer anchor="left" open={open} onClose={onClose}>
        <div className={classes.drawer}>
            <IconButton
                className={classes.drawer__close}
                aria-label="Close navigation menu"
                onClick={onClose}
            >
                <img src="img/icon-close.svg" alt=""/>
            </IconButton>

            <List>
                {navItems.map(item => (
                    <ListItemButton key={item} onClick={onClose}>
                        <ListItemText primary={item} className={classes.drawer__text}/>
                    </ListItemButton>
                ))}
            </List>
        </div>
    </Drawer>
);

export {NavDrawer};
