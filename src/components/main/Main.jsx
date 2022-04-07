import React from 'react';
import classes from './Main.module.scss';
import {Slider} from "./Slider.jsx";
import {Description} from "./Description.jsx"

const Main = () => {

    return (
        <div className={`${classes.main}`}>
            <div className={classes.main__content}>
                <Slider/>
                <Description/>
            </div>
        </div>
    );
}

export {Main}