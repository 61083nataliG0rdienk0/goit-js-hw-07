import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markupGallery = createMarkupGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markupGallery);

// динамическая разметка
function createMarkupGallery(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`;
    })
    .join("");
}

// создание и настройка библиотеки simplelightbox
let gallery = new SimpleLightbox(".gallery a", {
  enableKeyboard: true,
  showCounter: false,
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});