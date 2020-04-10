// Comment this line when you use test
const allHide = document.querySelectorAll('.hide');

function showError(item) {
  // Comment this line when you use test
  allHide[item].classList.remove('hide');
}

function hideError(item) {
  // Comment this line when you use test
  if (!allHide[item].classList.contains('hide')) {
    allHide[item].classList.add('hide');
  }
}

function validateName(name) {
  const correctLength = name.length > 2;
  const noNumbersAndSpecial = !!/^[a-zA-Z]*$/.test(name);
  const validationResult = !!(correctLength && noNumbersAndSpecial);

  if (validationResult === false) showError(0);
  else hideError(0);

  return validationResult;
}

function validateEmail(email) {
  const haveAt = !!email.includes('@');
  if (!haveAt) {
    showError(1);
    return false;
  }

  const haveText = email.split('@')[0].length > 1;
  const haveDomain = email.split('@')[1].length >= 5
    && email.split('@')[1].includes('.')
    && (email.split('@')[1].indexOf('.') > 1
      || email.split('@')[1].indexOf('.') < email.split('@')[1].length - 1);
  const validationResult = !!(haveText && haveAt && haveDomain);

  if (validationResult === false) showError(1);
  else hideError(1);

  return validationResult;
}

function validatePassword(password) {
  const haveCorrectLength = password.length >= 8;
  const haveNumber = /\d/.test(password);
  const haveSpecialSymbol = !/^[a-zA-Z0-9]*$/.test(password);
  const haveCapitalLetter = /[A-Z]/.test(password);
  const validationResult = !!(
    haveCorrectLength
    && haveNumber
    && haveSpecialSymbol
    && haveCapitalLetter
  );

  if (validationResult === false) showError(2);
  else hideError(2);

  return validationResult;
}

function confirm(password, repeatPassword) {
  const validationResult = password === repeatPassword && password !== '';
  if (validationResult === false) showError(3);
  else hideError(3);

  return validationResult;
}

function validateForm(form) {
  const flagName = validateName(form[0][0].value);
  const flagEmail = validateEmail(form[0][1].value);
  const flagPassword = validatePassword(form[0][2].value);
  const flagConfirm = confirm(form[0][2].value, form[0][3].value);
  const flagChecked = form[0][4].checked;

  if (flagChecked === false) showError(4);
  else hideError(4);

  return flagName && flagEmail && flagPassword && flagConfirm && flagChecked;
}

export default validateForm;

// exports for test
// module.exports = {
//   validateName,
//   validateEmail,
//   validatePassword,
//   confirm,
// };
