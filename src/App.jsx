import React from 'react'
import {connect} from 'react-redux'
import classes from './App.module.css'
import CommandBar from './components/CommandBar/CommandBar'
import ShoppingList from './components/ShoppingList/ShoppingList'
import Total from './components/Total/Total'

const App = ({listIsActive, totalIsActive, total}) => {

    return (

        <div className={classes.App}>
            <CommandBar/>
            {listIsActive && <ShoppingList/>}
            {totalIsActive && <Total total={total}/>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listIsActive: state.listIsActive.listIsActive,
        totalIsActive: state.purchases.totalIsActive,
        total: state.purchases.total
    }
}

export default connect(mapStateToProps)(App)