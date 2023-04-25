import {httpClient} from './httpClient';

const querySearchImages = {
  getImages: page =>
    httpClient.get(`photos?page=${page}`).then(response => response),
};
export default querySearchImages;
