import {httpClient} from './httpClient';

const querySearchImages = {
  getImages: params => httpClient.get('photos/').then(response => response),
};
export default querySearchImages;
