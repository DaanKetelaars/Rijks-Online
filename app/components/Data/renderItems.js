const renderItems = cleanItems => {
    const renderedItems = cleanItems.map(item => {
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const img = document.createElement("img");
        img.src = item.url;
        img.setAttribute("alt", `${item.longTitle}`)
        img.setAttribute("loading", "lazy")

        figcaption.innerHTML = `${item.maker} </br></br> ${item.title}`

        const main = document.querySelector("main");
        figure.setAttribute("id", item.id);
        figure.appendChild(figcaption)
        figure.appendChild(img);
        main.appendChild(figure);

        const itemTitle = item.title;
        const itemLongTitle = item.longTitle;
        const itemMaker = item.maker;
        const itemImgUrl = item.url;

        return {
            itemTitle,
            itemLongTitle,
            itemMaker,
            itemImgUrl,
            figure
        }
    })
    return renderedItems
}
export {
    renderItems
}