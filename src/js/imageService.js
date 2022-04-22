import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'http://pixabay.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const PER_PAGE = 40;

export default class ImagesService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.hits = 0;
    this.totalHits = 0;
  }

  async getImages() {
    const params = {
      params: {
        key: '26934421-228fe3d802be0c8710ae14787',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${PER_PAGE}`,
      },
    };

    try {
      const fetchImages = await axios.get('/api', params);
      const imagesArray = await fetchImages.data.hits;

      if (imagesArray.length === 0) {
        return Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      }
      this.incrementPage();

      this.totalHits = fetchImages.data.totalHits;
      return imagesArray;
    } catch (error) {
      Notify.failure('Ups... Something went wrong, try letter');
    }
  }

  hitsCounter() {
    this.hits += PER_PAGE;
  }

  resetHits() {
    this.hits = 0;
    this.totalHits = 0;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get hitsValue() {
    return this.hits;
  }

  get totalHitsValue() {
    return this.totalHits;
  }

  searchSuccess() {
    Notify.success(`Hooray! We found ${this.totalHits} images.`);
  }
}
