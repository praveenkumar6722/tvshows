import { $, $$, browser } from 'protractor';
import { BasePO } from './base.po';

export class ResultsPage extends BasePO {


  navigateTo() {
    return browser.get('/search?phrase=disney') as Promise<any>;
  }

  getResultsComponent() {
    return $('f-tvshows-search-results');
  }

  getResultsHeader() {
    return $('.search-results__header');
  }

  getSearchResultsCards() {
    return $$('f-tvshows-show-card');
  }

}
