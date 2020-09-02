import { $, browser } from 'protractor';
import { BasePO } from './base.po';

export class ShowDetails extends BasePO {

  navigateTo() {
    return browser.get('/detail/169') as Promise<any>;
  }

  getDetailsComponent() {
    return $('f-tvshows-show-details');
  }

  getShowName() {
    return $('.show-details__name');
  }

  getShowImage() {
    return $('.show-details__image');
  }

  getShowSummary() {
    return $('.show-details__summary');
  }

  getShowGenres() {
    return $('.show-details__genres');
  }

  getShowTabEpisodes() {
    return $('.show-details-tabs__episodes');
  }

  getShowTabCast() {
    return $('.show-details-tabs__cast');
  }

}
