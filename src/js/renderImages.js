import { createString } from './createString';

import { refs } from './refs';
const { gallery } = refs();

export function renderImages(imagesArray) {
  const str = imagesArray.map(obj => createString(obj)).join('');
  gallery.insertAdjacentHTML('beforeend', str);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();

  scroll();
}

function scroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
