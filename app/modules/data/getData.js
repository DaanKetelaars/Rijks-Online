const getData = data => {
    const artWorks = data.artObjects;
    let getKeys = artWorks.map(item => {
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
    return getKeys;
}

export {
    getData
}