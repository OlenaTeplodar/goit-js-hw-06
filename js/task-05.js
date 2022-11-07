const refs = {
  inputName: document.querySelector("input#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", (event) => {

  const value = refs.inputName.value.trim();
refs.nameLabel.textContent = value ? value : `Anonymous`; 
});



// my var
// const refs = {
//   inputName: document.querySelector("input#name-input"),
//   nameLabel: document.querySelector("#name-output"),
// };

// refs.inputName.addEventListener("input", nameChange);

// function nameChange(event) {
//   if (event.currentTarget.value.trim() !== "") {
//     refs.nameLabel.textContent = event.currentTarget.value;
//     return;
//   }

//   refs.nameLabel.textContent = `Anonymous`;
// }

// фукнція trim() видаляє зайві пробіли у рядку (напочатку та наприкінці) trimStart() trimEnd() - відповідно початок та кінець очіщує
