const routing = newData => {

    const sections = document.querySelectorAll('section');
    const section = document.querySelector(`section[data-route="template"]`);
    const ul = document.createElement("ul");
    section.appendChild(ul)

    routie({
        'artwork/:id': (id) => {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            console.log(id);
            console.log("template");
            let filterOnID = newData.filter(item => item.id === id);
            console.log(filterOnID);
            filterOnID.forEach(item => {
                const figures = `
                <a href="#artwork/${item.id}">
                    <figure>
                        <figcaption>
                        <h2>${item.title}</h2>
                        <p>${item.maker}</p>
                        </figcaption>
                        <img src="${item.url}" alt="${item.longTitle}">
                    </figure>
                </a>
            `;
                const li = document.createElement('li');
                li.innerHTML = figures;
                ul.appendChild(li);
            })
            updateUI("template");
        },
        " ": () => {
            console.log("empty");
            updateUI("empty");
        }
    });

    function updateUI(route) {
        sections.forEach((item) => {
            item.classList.add("disabled");
        });
        let activeSection = document.querySelector(`[data-route=${route}]`);
        activeSection.classList.remove("disabled");
    }

}

export {
    routing
}