import {
    validateForm
} from './validateForm.js';

const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    e.preventDefault();
    validateForm(document.forms);
})