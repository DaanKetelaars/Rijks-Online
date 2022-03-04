import {
    getData
} from './components/Data/getData.js';
// import {
//     fetchData
// } from './components/data-test/fetchData.js';
import {
    ScrollJacking
} from './components/SmoothScroll/ScrollJacking.js';


// smooth scrolling
ScrollJacking();

// on submit show results
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    getData()
})