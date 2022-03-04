const cleanItems = items => {
    // clean out results with null of url
    let cleanUrls = items.filter(item => {
        return item.url != 750;
    });
    return cleanUrls
}

export {
    cleanItems
}