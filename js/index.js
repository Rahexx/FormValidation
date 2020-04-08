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
    const form = document.forms;
    const result = validateForm(form);
    const API_URL = 'https://przeprogramowani.pl/projekt-walidacja';

    if (result === true) {
        const data = {
            name: form[0][0].value,
            email: form[0][1].value,
            password: form[0][2].value,
            rodo: form[0][4].value
        }

        fetch(API_URL, {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(res => {
                if (res.ok) {
                    return res.text()
                }
                throw 'Nie udało się wysłać zapytania'
            })
            .then(res => {
                console.log(res.json())
            })
            .catch(err => {
                alert('Spróbuj ponownie')
            })
    }

    clearInputs(document.forms);

})