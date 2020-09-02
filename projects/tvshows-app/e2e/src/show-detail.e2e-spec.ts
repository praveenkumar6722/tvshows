import { ShowDetails } from './page-objects/details.po';


describe('Show Details Page', () => {

  let page: ShowDetails;

  beforeAll(() => {
    page = new ShowDetails();
    page.navigateTo();
  });

  describe('Details', () => {

    it('page should display show name', () => {
      expect(page.getShowName().isDisplayed).toBeTruthy();
    });

    it('page should display show genres', () => {
      expect(page.getShowGenres().isDisplayed).toBeTruthy();
    });

    it('page should display show image', () => {
      expect(page.getShowImage().isDisplayed).toBeTruthy();
    });

    it('page should display show summary', () => {
      expect(page.getShowSummary().isDisplayed).toBeTruthy();
    });

    it('page should display cast tab', () => {
      expect(page.getShowTabCast().isDisplayed).toBeTruthy();
    });

    it('page should display episodes tab', () => {
      expect(page.getShowTabEpisodes().isDisplayed).toBeTruthy();
    });
  });

});
