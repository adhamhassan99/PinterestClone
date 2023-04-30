import {httpClient} from './httpClient';

const querySearchImages = {
  getImages: page =>
    httpClient.get(`photos?page=${page}`).then(response => response),
  getImagesBySearch: (page, query) =>
    httpClient
      .get(`search/photos?page=${page}&query${query}`)
      .then(response => response),
};
export default querySearchImages;
