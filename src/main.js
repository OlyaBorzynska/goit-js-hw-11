import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  const formData = new FormData(form);
  const textImage = formData.get('search-text');

  if (textImage.trim() === '') {
    iziToast.error({
      theme: 'dark',
      position: 'topRight',
      backgroundColor: 'red',
      message: `Sorry, there are no images matching 
      your search query. <br> Please try again!`,
    });
  } else {
    showLoader();
    getImagesByQuery(textImage.trim())
      .then(result => {
        if (result.hits.length === 0) {
          iziToast.error({
            theme: 'dark',
            position: 'topRight',
            backgroundColor: 'red',
            message: `Sorry, there are no images matching 
            your search query. <br> Please try again!`,
          });
        } else {
          createGallery(result.hits);
          form.reset();
        }
      })
      .catch(error => {
        iziToast.error({
          theme: 'dark',
          position: 'topRight',
          backgroundColor: 'red',
          message: `ERROR: ${error}`,
        });
      })
      .finally(() => hideLoader());
  }
});
