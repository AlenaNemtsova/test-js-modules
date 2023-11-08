import { nameInput, emailInput, phoneMask, commentInput, form } from './constants';

export async function handleSubmit(e) {
    e.preventDefault();

    if (document.querySelector('.error')) {
        alert("Проверьте поля формы");
        return;
    }

    if (!nameInput.value || !emailInput.value || !phoneMask.unmaskedValue || !commentInput.value) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    let application = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneMask.unmaskedValue,
        comment: commentInput.value,
    }
    console.log(application);

    try {
        const response = await fetch('/api/registration',
            {
                method: 'POST',
                body: JSON.stringify(application),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            });
        const data = response.status;
        console.log(data);

        if (response.status === 200) {
            alert(`${response.status}`);
            form.reset();
        }
        return data

    } catch (e) {
        console.log(e);
    }
}