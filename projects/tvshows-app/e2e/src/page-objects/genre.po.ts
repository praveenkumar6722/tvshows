import { $, browser } from 'protractor';
import { BasePO } from './base.po';

export class GenrePage extends BasePO {

  navigateTo() {
    return browser.get('/genre/Adventure') as Promise<any>;
  }

  getGenreComponent() {
    return $('f-tvshows-genre');
  }

  getGenreHeader() {
    return $('.genre__header');
  }

}
