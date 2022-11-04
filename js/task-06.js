const refs = {
    input: document.querySelector('input'),
    lengthControl: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onLengthControl);
// #validation - input

function onLengthControl(event) {
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.lengthControl.classList.add('valid');
        refs.lengthControl.classList.remove("invalid"); //знімаю цей класс, щоб при видаленні зайвих символів все працювало
        return;
    }
    refs.lengthControl.classList.add('invalid')
}
