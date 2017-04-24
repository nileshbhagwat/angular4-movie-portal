import { Angular4MoviePortalPage } from './app.po';

describe('angular4-movie-portal App', () => {
  let page: Angular4MoviePortalPage;

  beforeEach(() => {
    page = new Angular4MoviePortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
