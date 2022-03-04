const detail = renderItems => {

    // routing
    renderItems.forEach(item => {

        const template = `
            <div>
                <h2>${item.itemLongTitle}</h2>
                <p>${item.itemMaker}</p>
                <img src="${item.itemImgUrl}" alt="${item.itemTitle}">
            </div>
        `
        const key = `/${item.figure.id}`;
        const routes = {
            [key]: template
        }
        const rootDiv = document.getElementById('root');

        const onNavigate = (pathname) => {
            window.history.pushState({}, '', window.location.origin + pathname)
            rootDiv.innerHTML = routes[pathname]
        }

        window.onpopstate = () => {
            rootDiv.innerHTML = routes[window.location.pathname]
        }

        item.figure.addEventListener('click', event => {
            rootDiv.innerHTML = routes[window.location.pathname];
            onNavigate(Object.keys(routes));
        })
    })
}

export {
    detail
}