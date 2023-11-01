import { insertAfter, generateError } from './helpers';

export function validateTextField(event) {
    const node = event.target ? event.target : event;
    const nodeTrimmed = node.value.trim();
    let error;
    if (node.validity.valueMissing || nodeTrimmed == '') {
        error = generateError("Поле должно быть заполнено");
    }
    if (error) {
        insertAfter(error, node, 'error-border');
    }
}

export function validateEmailField(event) {
    const node = event.target ? event.target : event;
    let error;
    if (!node.value) {
        error = generateError("Поле должно быть заполнено");
    } else if (
        node.value.length &&
        !node.value
            .toLowerCase()
            .match(
                /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
            )
    ) {
        error = generateError("Введите действительный e-mail");
    }
    if (error) {
        insertAfter(error, node, 'error-border');
    }
}

export function validatePhoneField(event, mask) {
    const node = event.target ? event.target : event;

    let error;
    if (!mask.masked.isComplete) {
        error = generateError("Поле должно быть заполнено");
    }
    if (error) {
        insertAfter(error, node, 'error-border');
    }
}