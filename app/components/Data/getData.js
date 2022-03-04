import {
    getItems
} from "./getItems.js";
import {
    cleanItems
} from './cleanItems.js'
import {
    renderItems
} from "./renderItems.js"
import {
    detail
} from "../Detail.js";

const getData = () => {

    const images = document.querySelectorAll('main figure');

    images.forEach(image => {
        image.remove()
    })

    let userInput = document.getElementById('textField').value;
    const apiKey = `https://www.rijksmuseum.nl/api/nl/collection?key=b5LmWYv7&q=${userInput}`
    fetch(apiKey)
        .then(response => {
            return response.json();
        })
        .then(getItems)
        .then(cleanItems)
        .then(renderItems)
        .then(detail)
        .catch((error) => {
            console.log("catch me if you can", error);
        });
}

export {
    getData
}