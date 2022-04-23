// import './sass/main.scss';
// import { refs } from './js/refs';
// const { searchForm, gallery } = refs();
// import { renderImages } from './js/renderImages';
// import ImagesService from './js/imageService';
// import LoadMoreBtn from './js/loadMoreBtn';
// import { clearElement } from './js/clearElement';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';

// import 'simplelightbox/dist/simple-lightbox.min.css';

// const imagesService = new ImagesService();
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

// searchForm.addEventListener('submit', onSubmit);
// loadMoreBtn.refs.button.addEventListener('click', getImages);

// function onSubmit(e) {
//   e.preventDefault();

//   imagesService.query = e.currentTarget.elements.searchQuery.value;

//   if (imagesService.query === '') {
//     return alert('Please, enter a query');
//   }

//   imagesService.resetHits();
//   imagesService.resetPage();
//   clearElement(gallery);
//   getImages().then(r => {
//     imagesService.searchSuccess();
//   });
//   loadMoreBtn.show();
// }
// function getImages() {
//   loadMoreBtn.disable();

//   imagesService.hitsCounter();

//   imagesService.getImages().then(imagesArray => {
//     if (!imagesArray) {
//       loadMoreBtn.hide();
//     }
//     renderImages(imagesArray);

//     loadMoreBtn.enable();

//     if (imagesService.hitsValue >= imagesService.totalHitsValue) {
//       loadMoreBtn.hide();
//       Notify.failure("We're sorry, but you've reached the end of search results.");
//     }
//   });

//   return new Promise((resolve, reject) => {
//     resolve();
//   });
// }

const BASE_URL = `https://pixabay.com/api/?key=26934421-228fe3d802be0c8710ae14787&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`;

fetch(BASE_URL)
  .then(r => r.json())
  .then(qwe => {
    console.log(qwe);
  });
