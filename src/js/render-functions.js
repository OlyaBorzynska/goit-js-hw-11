import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

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
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
