import { $, $$, browser, by, element } from 'protractor';
import { BasePO } from './base.po';

export class HomePage extends BasePO {

  navigateToHome() {
    return browser.get('/home') as Promise<any>;
  }

  getHeaderText() {
    return $('.header h1').getText();
  }

  getGenreCollectionHeader() {
    return $('.genre-collection h3');
  }

  getPopularShowsComponent() {
    return $('f-tvshows-popular-shows-carousel');
  }

  getGenreCollectionComponent() {
    return $('f-tvshows-genre-collection');
  }

  getHomeContainer() {
    return $('.home-container');
  }


  getGenreButtons() {
    return $$('.genre-collection__genre-btn');
  }

  getGenreCollectionShows() {
    return $$('.genre-collection__shows');
  }

  getGenreCollectionGenreName() {
    return $$('.genre-collection__genre-name');
  }


  getGenreCollectionViewAll() {
    return $$('.genre-collection__viewall');
  }

  getGenreShowCardList() {
    return $$('.genre-collection__cards-list');
  }

  getGenreShowCardContent() {
    return $$('.show-card__content');
  }

  getGenreShowCardRating() {
    return $$('.show-card__rating');
  }

  getSearchBox() {
    return element(by.name('search'));
  }

  getSubmitButton() {
    return $('#btn-search');
  }

  getShowCard() {
    return $$('.show-card');
  }

}
