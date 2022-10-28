// кількість категорій
const arrayItem = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${arrayItem.length}`);


// Текст h2 та кільіксть елементів
arrayItem.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    // const itemsEl = element.querySelectorAll('li');
    // console.log(`Elements: ${itemsEl.length}`);
console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
