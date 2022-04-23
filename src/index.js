import './sass/main.scss';
import { refs } from './js/refs';
const { searchForm, gallery } = refs();
import { renderImages } from './js/renderImages';
import ImagesService from './js/imageService';
import LoadMoreBtn from './js/loadMoreBtn';
import { clearElement } from './js/clearElement';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const imagesService = new ImagesService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.refs.button.addEventListener('click', getImages);

function onSubmit(e) {
  e.preventDefault();

  imagesService.query = e.currentTarget.elements.searchQuery.value;

  if (imagesService.query === '') {
    return alert('Please, enter a query');
  }

  imagesService.resetHits();
  imagesService.resetPage();
  clearElement(gallery);
  getImages()
    .then(r => {
      imagesService.searchSuccess();
    })
    .catch(r => {
      console.log('catch');
    });
  loadMoreBtn.show();
}
function getImages() {
  loadMoreBtn.disable();
  imagesService.hitsCounter();

  return imagesService.getImages().then(imagesArray => {
    if (!imagesArray) {
      loadMoreBtn.hide();
    }
    renderImages(imagesArray);

    loadMoreBtn.enable();

    if (imagesService.hitsValue >= imagesService.totalHitsValue) {
      if (imagesArray) {
        loadMoreBtn.hide();
        Notify.failure("We're sorry, but you've reached the end of search results.");
      }
    }
    const qwe = new Promise((resolve, reject) => {
      if (!imagesArray) {
        return reject();
      }
      resolve();
    });
    return qwe;
  });
}
