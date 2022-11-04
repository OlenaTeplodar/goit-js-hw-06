const controlFontSize = document.querySelector("input#font-size-control");
const fontSizeCurrent = document.querySelector('span#text');

controlFontSize.addEventListener('change', onFontSizeChange);

function onFontSizeChange(event) {
    fontSizeCurrent.style.fontSize = `${event.currentTarget.value}px`;
}