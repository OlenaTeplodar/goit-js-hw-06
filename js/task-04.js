
const countDecrement = document.querySelector('[data-action="decrement"]');
const countIncrement = document.querySelector('[data-action="increment"]');
const countValue = document.querySelector("#value");

let counter = 0;

const render = () => {
  countValue.textContent = Number(counter);
};

const onCountDecrement = () => {
  counter -= 1;
  render();
};

const onCountIncrement = () => {
  counter += 1;
  render();
};

countDecrement.addEventListener("click", onCountDecrement);
countIncrement.addEventListener("click", onCountIncrement);



// my var
// const refs = {
//   countDecrement: document.querySelector('[data-action="decrement"]'),
//   countIncrement: document.querySelector('[data-action="increment"]'),
//   countValue: document.querySelector("#value"),
// };

// refs.countDecrement.addEventListener("click", onCountDecrement);
// refs.countIncrement.addEventListener("click", onCountIncrement);

// let counterValue = 0;

// function onCountDecrement() {
//   refs.countValue.textContent = counterValue -= 1;
// }

// function onCountIncrement() {
//   refs.countValue.textContent = counterValue += 1;
// }
