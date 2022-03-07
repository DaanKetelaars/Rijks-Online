import {
    renderData
} from "./renderData.js"
import {
    cleanData
} from "./cleanData.js";
import {
    getData
} from "./getData.js"
import {
    routing
} from "./routing.js";

const fetchData = () => {

    const allArtWorks = document.querySelectorAll(`section ul`);

    allArtWorks.forEach(item => {
        item.remove()
    })

    let userInput = document.getElementById('textField').value;
    const apiKey = `https://www.rijksmuseum.nl/api/nl/collection?key=b5LmWYv7&q=${userInput}`
    fetch(apiKey)
        .then(response => {
            return response.json();
        })
        .then(getData)
        .then(cleanData)
        .then(renderData)
        .then(routing)
        .catch((error) => {
            console.log("catch me if you can", error);
        });
}


export {
    fetchData
}