function validateForm(form) {

    return validateName(form[0][0].value) && validateEmail(form[0][1].value) && validatePassword(form[0][2].value) && confirm(form[0][2].value, form[0][3].value) && form[0][4].checked ? true : false;
}

function validateName(name) {
    return name.length > 2 && [...name].filter((el) => !isNaN(Number(el))).length === 0 && /^[a-zA-Z0-9]*$/.test(name) ? true : false;
}

function validateEmail(email) {

    const haveAt = email.includes("@") ? true : false;
    if (!haveAt) return false;
    const haveText = email.split("@")[0].length > 1 ? true : false;
    const haveDomain = email.split("@")[1].length >= 5 && email.split("@")[1].includes(".") && (email.split("@")[1].indexOf(".") > 1 || email.split("@")[1].indexOf(".") < email.split("@")[1].length - 1);
    return haveText && haveAt && haveDomain ? true : false;
}

function validatePassword(password) {
    const haveCorrectLength = password.length >= 8 ? true : false;
    const haveNumber = /\d/.test(password);
    const haveSpecialSymbol = !/^[a-zA-Z0-9]*$/.test(password) ? true : false;
    const haveCapitalLetter = /[A-Z]/.test(password)
    return haveCorrectLength && haveNumber && haveSpecialSymbol && haveCapitalLetter ? true : false;
}

confirm = (password, repeatPassword) => password === repeatPassword;

export {
    validateForm,
};

//exports for test
// module.exports = {
//     validateName,
//     validateEmail,
//     validatePassword,
//     confirm,
// }