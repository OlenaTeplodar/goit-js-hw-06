const refs = {
  bodyColor: document.querySelector('body'),
  colorChangeBtn: document.querySelector("button.change-color"),
  spanColorInfo: document.querySelector('span.color'),
};


refs.colorChangeBtn.addEventListener('click', onColorChange);


function onColorChange(event) {
  const color = getRandomHexColor(event);
  refs.bodyColor.style.backgroundColor = color;
  refs.spanColorInfo.textContent = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
