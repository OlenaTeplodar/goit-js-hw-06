const refs = {
  inputName: document.querySelector("input#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.inputName.addEventListener('input', nameChange);


function nameChange(event) {

    if(event.currentTarget.value !== "") {
    refs.nameLabel.textContent = event.currentTarget.value;
    return;
    }

    refs.nameLabel.textContent = `Anonymous`;
}