import { Angular2MaterializePage } from './app.po';

describe('angular2-materialize App', () => {
  let page: Angular2MaterializePage;

  beforeEach(() => {
    page = new Angular2MaterializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
