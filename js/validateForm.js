function validateForm(form) {
    validateName(form[0][0].value);
    // validateEmail(form[0][1].value);
    // validatePassword(form[0][2].value, form[0][3].value);
    // validateCheckbox(form[0][4].checked);
}

validateName = (name) => name.length > 2 && [...name].filter((el) => !isNaN(Number(el))).length === 0 && /^[a-zA-Z0-9]*$/.test(name) === true ? name : false;

export {
    validateForm
};

//exports for test
//module.exports = validateName;