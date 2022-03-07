const cleanData = getKeys => {
    let cleanedData = getKeys.filter(item => {
        return item.url != 750;
    })
    return cleanedData
}

export {
    cleanData
}