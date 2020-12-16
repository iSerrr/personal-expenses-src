const parseAndFormatDate = (dateData) => {
    const date = new Date(dateData)
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`
}

export default parseAndFormatDate