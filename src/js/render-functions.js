// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та
// зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

let simpleGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function imageTemplate(image) {
  return `<a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        <div class="small-container">
          <p class="gallery-text">
            <span class="small-title-gallery">Likes</span><br>${image.likes}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Views</span><br>${image.views}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Comments</span><br>${image.comments}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Downloads</span><br>${image.downloads}
          </p>
        </div>
      </a>`;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}

export function createGallery(images) {
  gallery.insertAdjacentHTML('afterbegin', imagesTemplate(images));
  simpleGallery.refresh();
}

export function clearGallery() {
  gallery.outerHTML('');
}

// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
