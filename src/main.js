import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
// const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const textImage = formData.get('search-text');

  if (textImage.trim() === '') {
    iziToast.warning({
      message: `Fill in the search field`,
    });
  } else {
    getImagesByQuery(textImage.trim()).then(response => {
      if (response.data.hits.length === 0) {
        iziToast.warning({
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      } else {
        // clearGallery();

        const markup = createGallery(response.data.hits);
        form.reset();
      }
    });
    //   .catch(error=>console.log(error);
  }
});
