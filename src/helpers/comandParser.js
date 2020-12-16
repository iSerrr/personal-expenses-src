const validateForDate = (data) => {
    if (!Date.parse(data)) return false
    const regexp = /\b\d{4}-\d{2}-\d{2}\b/
    return regexp.test(data)
}

const validateForPrice = (data) => {
    const regexp = /\d+\.?\d*/
    return regexp.test(data)
}

const validateForCurrency = (data) => {
    const regexp = /[A-Z]{3}/
    return regexp.test(data)
}

const validateForTitle = (data) => {
    const regexp = /([A-z]+\s?)+/
    return regexp.test(data)
}

const commandParser = (command) => {
    let errors = []

    const [action, ...params] = command.split(' ')

    switch (action) {

        case 'add': {
            const [date, price, currency, ...title] = params

            if (!validateForDate(date)) errors = [...errors, 'date']
            if (!validateForPrice(price)) errors = [...errors, 'price']
            if (!validateForCurrency(currency)) errors = [...errors, 'currency']
            if (!validateForTitle(title.join(' '))) errors = [...errors, 'title']

            return {
                action,
                date: Date.parse(date),
                price,
                currency,
                title: title.join(' '),
                errors
            }
        }
        case 'total': {
            const [currency] = params

            if (!validateForCurrency(currency)) errors = [...errors, 'currency']

            return {
                action,
                currency,
                errors
            }
        }
        case 'clear': {
            const [date] = params

            if (!validateForDate(date)) errors = [...errors, 'date']

            return {
                action,
                date: Date.parse(date),
                errors
            }
        }
        case 'list': {
            return {action}
        }

        default:
            errors = ['wrong command']
            return {
                errors
            }
    }
}

export default commandParser