import { ResultsPage } from './page-objects/results.po';
import { GenrePage } from './page-objects/genre.po';

describe('Genre Page', () => {

  let page: GenrePage;

  beforeAll(() => {
    page = new GenrePage();
    page.navigateTo();
  });

  describe('Genre', () => {

    it('page should contain header component', () => {
      expect(page.getHeaderComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain footer component', () => {
      expect(page.getfooterComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain genre component', () => {
      expect(page.getGenreComponent().isDisplayed).toBeTruthy();
    });

    it('should display genre header', () => {
      expect(page.getGenreHeader().getText()).toEqual('"Adventure" Shows');
    });

  });


});
