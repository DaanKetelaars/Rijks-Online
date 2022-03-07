import {
    fetchData
} from "./modules/data/fetchData.js";
import {
    ScrollJacking
} from './modules/SmoothScroll/ScrollJacking.js';


// smooth scrolling
ScrollJacking();

// on submit show results
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    fetchData()
})