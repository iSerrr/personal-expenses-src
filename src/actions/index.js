import commandParser from '../helpers/comandParser'
import {ADD, LIST, TOTAL, CLEAR, ERROR} from './actionsTypes'
import axios from 'axios'

export function commandHandler(value) {

    const command = commandParser(value)

    if (command.errors && command.errors.length !== 0) return {
        type: ERROR,
        payload: command.errors
    }

    switch (command.action) {
        case ADD:
            return {
                type: ADD,
                payload: command
            }

        case CLEAR:
            return {
                type: CLEAR,
                payload: command
            }

        case TOTAL:
            return dispatch => dispatch(fetchFromFixer(command.currency))
        case LIST:
            return {
                type: LIST,
            }
        default:
            break
    }
}

export function fetchFromFixer(selectedCurrency) {
    return dispatch => {
        axios.get('http://data.fixer.io/api/latest', {
            params:
                {
                    'access_key': 'a0a7bd9637b9a7b7a4e3b7914007b073',
                    'base': 'EUR',
                    'symbols': 'PLN,USD,EUR'
                }
        })
            .then(({data}) => dispatch(
                {
                    type: TOTAL,
                    payload: {
                        selectedCurrency,
                        fixerData: data
                    }
                })
            )
    }
}