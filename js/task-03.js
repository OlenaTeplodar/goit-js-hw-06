const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryContainerEl = document.querySelector('.gallery');

const liEl = document.createElement('li');
liEl.classList.add('gallery__item');
// const imgEl = gallery__item.createElement("img");
// imgEl.classList.add('image');
liEl.textContent = `<img src="${images.url}" alt="${images.alt}">`;

galeryContainerEl.insertAdjacentHTML('afterbegin', liEl);
// console.log(imgEl);
console.log(liEl);
// const makeGalery = ({ url, alt }) => {
//   console.log(`${ url }`);
//   console.log(alt);
//    return gallery.insertAdjacentHTML('afterbegin', `<img url=${url}; alt= ${alt};>`)

// }

// galeryContainerEl.insertAdjacentHTML(
//   "afterbegin",
//   "<img images.url; images.alt;>"
// );
// console.log(galeryContainerEl);