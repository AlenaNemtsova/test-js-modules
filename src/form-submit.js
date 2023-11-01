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

    return await fetch('/api/registration',
        {
            method: 'POST',
            body: JSON.stringify(application),
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res.status, res.msg);

            if (res.status === 200) {
                alert(`${res.msg}`);
                form.reset();
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}
