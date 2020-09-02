import { ResultsPage } from './page-objects/results.po';

describe('Search Results Page', () => {

  let page: ResultsPage;

  beforeAll(() => {
    page = new ResultsPage();
    page.navigateTo();
  });

  describe('Search', () => {

    it('page should display header', () => {
      expect(page.getResultsHeader().getText()).toEqual('"10" results found for "disney".');
    });

    it('page should contain results component', () => {
      expect(page.getResultsComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain show cards', () => {
      expect(page.getSearchResultsCards().isDisplayed).toBeTruthy();
    });

    it('page should contain header component', () => {
      expect(page.getHeaderComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain footer component', () => {
      expect(page.getfooterComponent().isDisplayed).toBeTruthy();
    });

  });

});
