const cleanData = getKeys => {
    let cleanedData = getKeys.filter(item => {
        return item.url != 1500;
    })
    return cleanedData
}

export {
    cleanData
}