const getItems = data => {
    const objects = data.artObjects;
    // loop over all objects and return items inside to use and clean
    let items = objects.map(item => {
        const url = item.webImage.url + 750;
        const title = item.title;
        const longTitle = item.longTitle;
        const maker = item.principalOrFirstMaker;
        const id = item.id;
        return {
            url,
            id,
            title,
            longTitle,
            maker
        };
    })
    return items;
}

export {
    getItems
}