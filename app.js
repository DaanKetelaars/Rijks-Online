import {
    getData
} from './app/components/Data/getData.js';
import {
    ScrollJacking
} from './app/components/SmoothScroll/ScrollJacking.js';


// smooth scrolling
ScrollJacking();
console.log("test");

// on submit show results
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    getData()
})