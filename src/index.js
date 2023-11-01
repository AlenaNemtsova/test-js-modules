import _ from 'lodash';
import './styles/main.scss';
import { nameInput, emailInput, phoneInput, commentInput, form, btn, phoneMask } from './constants';
import { removeError } from './helpers';
import { validateTextField, validateEmailField, validatePhoneField } from './validation';
import { handleSubmit } from './form-submit';

nameInput.addEventListener('input', nameInputHandler);
emailInput.addEventListener('input', emailInputHandler);
phoneInput.addEventListener('input', phoneInputHandler);
commentInput.addEventListener('input', commentInputHandler);

// handlers
function nameInputHandler(e) {
    removeError(e.target.nextSibling);
    validateTextField(e);
}

function emailInputHandler(e) {
    removeError(e.target.nextSibling);
    validateEmailField(e);
}

function phoneInputHandler(e) {
    removeError(e.target.nextSibling);
    validatePhoneField(e, phoneMask);
}

function commentInputHandler(e) {
    removeError(e.target.nextSibling);
    validateTextField(e);
}

// submission
form.addEventListener('submit', handleSubmit);
btn.addEventListener('click', handleSubmit);