import IMask from "imask";

export const nameInput = document.querySelector('.name-input');
export const emailInput = document.querySelector('.email-input');
export const phoneInput = document.querySelector('.phone-input');
export const commentInput = document.querySelector('.comment-input');

export const form = document.querySelector('.form');
export const btn = document.querySelector('.submit-button');

const phoneMaskOptions = {
    mask: '+375(00)000-00-00',
    lazy: false
}
export const phoneMask = new IMask(phoneInput, phoneMaskOptions);