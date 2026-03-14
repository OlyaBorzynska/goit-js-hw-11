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

  return await axios.get(url, { params }).then(response => response.data);
}
