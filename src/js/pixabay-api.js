// Для організації коду використовуй модульність та синтаксис export/import.

// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';

export async function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com';
  const endPoint = '/api/';
  const url = baseURL + endPoint;
  const params = {
    key: '55022045-3d975f619dbee963f7f59f5ce',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(url, { params });
}
