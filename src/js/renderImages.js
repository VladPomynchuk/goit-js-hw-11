import { createString } from './createString';

import { refs } from './refs';
const { gallery } = refs();

export function renderImages(imagesArray) {
  const str = imagesArray.map(obj => createString(obj)).join('');
  gallery.insertAdjacentHTML('beforeend', str);
}
