import { WeTravelPage } from './app.po';

describe('we-travel App', function() {
  let page: WeTravelPage;

  beforeEach(() => {
    page = new WeTravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
