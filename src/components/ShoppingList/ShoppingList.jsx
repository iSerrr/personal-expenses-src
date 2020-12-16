import React from 'react'
import classes from './ShoppingList.module.css'
import {connect} from 'react-redux'
import ShoppingItem from '../ShoppingItem/ShoppingItem'

const ShoppingList = ({list}) => {
    const createList = () => list.map((item, index) => <li key={index}><ShoppingItem purchases={item}/></li>)

    return (
        <ul className={classes.ShoppingList}>
            {list && createList()}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        list: state.purchases.purchases
    }
}

export default connect(mapStateToProps)(ShoppingList)