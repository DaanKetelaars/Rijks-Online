const fetchData = () => {

    let userInput = document.getElementById('textField').value;
    const apiKey = `https://www.rijksmuseum.nl/api/nl/collection?key=b5LmWYv7&q=${userInput}`
    fetch(apiKey)
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.log("catch me if you can", error);
        });
}

export {
    fetchData
}