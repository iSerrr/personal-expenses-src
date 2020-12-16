import React from 'react'
import classes from './Total.module.css'

const Total = ({total}) => {
    return (
        <div className={classes.Total}>
            <span>{`Total: ${total}`}</span>
        </div>
    )
}

export default Total