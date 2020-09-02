import { HomePage } from './page-objects/home.po';
import { browser } from 'protractor';
import { ResultsPage } from './page-objects/results.po';
import { protractor } from 'protractor/built/ptor';

describe('Home Page', () => {
  let page: HomePage;
  let resultsPage: ResultsPage;

  beforeAll(() => {
    page = new HomePage();
    resultsPage = new ResultsPage();
  });

  describe('Home', () => {

    beforeAll(() => {
      page.navigateToHome();
    });

    it('page should have a title', () => {
      expect(browser.getTitle()).toEqual('TV Shows | TV Maze - Your personal TV guide');
    });

    it('page should contain header component', () => {
      expect(page.getHeaderComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain footer component', () => {
      expect(page.getfooterComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain Popular shows component', () => {
      expect(page.getPopularShowsComponent().isDisplayed).toBeTruthy();
    });

    it('page should contain genre Collection component', () => {
      expect(page.getGenreCollectionComponent()).toBeTruthy();
    });

  });


  describe('Search', () => {

    beforeAll(() => {
      page.navigateToHome();
    });

    it('should navigate to search page when search button is clicked with value, ', () => {
      page.getSearchBox().sendKeys('fire');
      page.getSubmitButton().click();
      expect(browser.getCurrentUrl()).toContain('search?phrase');
    });

    it('search page should contain results component', () => {
      expect(resultsPage.getResultsComponent().isDisplayed).toBeTruthy();
    });

    it('search result page should display header', () => {
      expect(resultsPage.getResultsHeader().getText()).toContain('"10" results found for "fire".');
    });

    it('search result page should contain show cards', () => {
      expect(resultsPage.getSearchResultsCards().isDisplayed).toBeTruthy();
    });

    it('search page should contain header component', () => {
      expect(page.getHeaderComponent().isDisplayed).toBeTruthy();
    });

    it('search page should contain footer component', () => {
      expect(page.getfooterComponent().isDisplayed).toBeTruthy();
    });

  });


  describe('Genres', () => {

    beforeAll(() => {
      page.navigateToHome();
    });

    it('should display genre header', () => {
      expect(page.getGenreCollectionHeader().getText()).toContain('TV Shows Genres');
    });

    it('should display genre buttons', () => {
      expect(page.getGenreButtons().get(0).isDisplayed()).toBeTruthy();
    });

    it('should display genre name', () => {
      expect(page.getGenreCollectionGenreName().get(0).isDisplayed()).toBeTruthy();
    });

    it('should scroll down', () => {
      browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    });

    it('should display view all', () => {
      expect(page.getGenreCollectionViewAll().get(0).isDisplayed()).toBeTruthy();
    });

    it('should display cards list', () => {
      expect(page.getGenreShowCardList().get(0).isDisplayed()).toBeTruthy();
    });

    it('should display cards content', () => {
      expect(page.getGenreShowCardContent().get(0).isDisplayed()).toBeTruthy();
    });

    it('should display rating on card', () => {
      expect(page.getGenreShowCardRating().get(0).isDisplayed()).toBeTruthy();
    });

    it('should navigate to genre page when clicked', () => {
      page.navigateToHome();
      page.getGenreButtons().get(0).click();
      expect(browser.getCurrentUrl()).toContain('genre');
    });

  });

  describe('Show Card', () => {

    beforeAll(() => {
      page.navigateToHome();
    });

    it('should navigate to detail page when show card is clicked', () => {
      page.getShowCard().get(0).click();
      expect(browser.getCurrentUrl()).toContain('detail');
    });

  });

});
