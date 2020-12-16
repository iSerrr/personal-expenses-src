import {ADD, CLEAR, ERROR, TOTAL} from '../actions/actionsTypes'

const initialState = {
    purchases: [],
    total: '',
    totalIsActive: false,
    errors: []
}

export default (state = initialState, action) => {
    const {purchases} = state
    const command = action.payload


    switch (action.type) {

        case ADD:
            const newPurchase = {
                date: command.date,
                purchase:
                    {
                        price: command.price,
                        currency: command.currency,
                        title: command.title
                    }
            }

            const addPurchase = (newPurchase) => {
                if (purchases.map(item => item.date === newPurchase.date).includes(true)) {
                    return addPurchaseAsExisting(newPurchase)
                } else {
                    return addPurchaseAsNew(newPurchase)
                }
            }

            const addPurchaseAsExisting = ({date, purchase}) => {
                return purchases.map(item =>
                    item.date === date ? {...item, purchases: [...item.purchases, purchase]} : item)

            }

            const addPurchaseAsNew = ({date, purchase}) => {
                return [...purchases, {date: date, purchases: [purchase]}]
            }
            return {...state, purchases: addPurchase(newPurchase), errors: []}

        case CLEAR:
            return {...state, purchases: purchases.filter(item => item.date !== command.date), errors: []}

        case TOTAL:
            const {selectedCurrency, fixerData} = action.payload

            const permTotalObj = {
                PLN: 0,
                USD: 0,
                EUR: 0
            }

            purchases.map(({purchases}) => purchases.map(purchase => permTotalObj[purchase.currency] += +purchase.price))

            let sum = 0
            const rates = fixerData.rates

            for (let key in rates) {
                sum += rates[selectedCurrency] / rates[key] * permTotalObj[key]
            }

            return {...state, total: `${Math.ceil(sum * 100) / 100} ${selectedCurrency}`, totalIsActive: true, errors: []}

        case ERROR:
            return {...state, errors: [...action.payload],}
        default:
            return {...state, totalIsActive: false}
    }
}