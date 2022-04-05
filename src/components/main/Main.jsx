import React from 'react';
import classes from './Main.module.scss';
import {Slider} from "./Slider.jsx";

const Main = () => {

    return (
        <div className={`${classes.main}`}>
            <div className={classes.main__content}>
                <Slider/>
            </div>
        </div>
    );
}

export {Main}