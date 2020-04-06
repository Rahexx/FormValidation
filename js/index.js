import {
    validateForm
} from './validateForm.js';

const button = document.querySelector('button');

function clearInputs(form) {
    for (let i = 0; i < form[0].length; i++) {
        form[0][i].value = "";
        if (form[0][i].type == "checkbox") form[0][i].checked = false;
    }
}

button.addEventListener('click', function (e) {
    e.preventDefault();
    const result = validateForm(document.forms);
    clearInputs(document.forms);
    console.log(result);
})