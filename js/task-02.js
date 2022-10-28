const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liContainerEl = document.querySelector("#ingredients");
const makeLiEl = (ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
};
const elements = ingredients.map(makeLiEl);

liContainerEl.append(...elements);

