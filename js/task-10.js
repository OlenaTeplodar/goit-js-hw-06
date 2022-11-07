// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// optimal var

const controlRef = document.querySelector('#controls');
const inputRef = controlRef.querySelector('input');
const createBtnRef = controlRef.querySelector("[data-create]");
const destroyBtnRef = controlRef.querySelector("[data-destroy]");
const divChangeRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", inputReading);

destroyBtnRef.addEventListener("click", () => {
  addMarkup();
  inputRef.value = '';
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function inputReading() {
  const amount = inputRef.valueAsNumber;

  if (!amount) return;
  
  const markup = createBoxes(amount);
  addMarkup(markup);
}

function createBoxes(amount) {

  const markup = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {

    const element = `<div class = "item"; style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    markup.push(element);
    size += 10;
    
  }
  return markup.join("");
};

// function addMarkup(markup = '')  за замовчуванням, якщо не буде задано аргументу, він буде дорівнювати пустому рядку
function addMarkup(markup = '') {
  divChangeRef.innerHTML = markup;
} 


// My var
// const refs = {
//   controlInput: document.querySelector('#controls > input'),
//   createBtn: document.querySelector("button[data-create]"),
//   destroyBtn: document.querySelector("button[data-destroy]"),
//   divChange: document.querySelector("div#boxes"),
// };

// refs.destroyBtn.addEventListener('click', destroyBoxes)
// refs.createBtn.addEventListener('click', inputReading);

// //читаємо інпут та передаємо число як аргумент у функцію створення дівів
// function inputReading() {
//   createBoxes(refs.controlInput.value);
// }

// function createBoxes(amount) {
//   //запобігання повторного створення дівів при багаторазовому кліку на кнопку
//   if (refs.divChange.children.length > 0) {
//     refs.divChange.innerHTML = "";
//   }

//   // створюємо змінні розміру та шаблонного рядку, задаємо початкові значення (розмір - 20рх, бо одразу буде додано +10)
//   let divSize = 20;
//   let divBoxes = ``;

//   // в циклі збільшуємо розмір та додаємо шаблонні рядки з новими дівами
//   for (let i = 0; i < amount; i++) {
//     divSize += 10;
//     divBoxes += `<div style="height: ${divSize}px; width: ${divSize}px; background-color: ${getRandomHexColor()}"></div>`;
//     // console.log(divSize);
//     // console.log(amount);
//   }

//   // по закінченю цикла в DOM передаємо всі шаблонні рядки за один раз
//   refs.divChange.insertAdjacentHTML("beforeend", divBoxes);
// }

// // функція рандомної генерації кольору
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // очіщуємо діви та інпут
// function destroyBoxes() {
//     refs.divChange.innerHTML = "";
//     refs.controlInput.value = "";
// }


