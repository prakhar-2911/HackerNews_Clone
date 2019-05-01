import React from 'react';
import classes from './Header.module.css';


const header = (props) => {

    return (
    <div className={classes.heading}>
    <h1>
        Hacker News Reader
    </h1>
    <p>
        (build your own)
    </p>
    </div>
    )
};

export default header;
