import React from 'react'
import classes from './ShoppingItem.module.css'
import parseAndFormatDate from '../../helpers/parseAndFormatDate'

const ShoppingItem = ({purchases}) => {
    const createPushesList = () => purchases.purchases.map((item, index) =>
        <li key={index}>{`${item.title} ${item.price} ${item.currency}`}</li>)
    return (
        <div className={classes.ShoppingItem}>

            <h3>{parseAndFormatDate(purchases.date)}</h3>
            <ul>
                {createPushesList()}
            </ul>
        </div>
    )
}

export default ShoppingItem