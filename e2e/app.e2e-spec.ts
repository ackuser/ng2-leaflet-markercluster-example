import { TestLeafletPage } from './app.po';

describe('test-leaflet App', () => {
  let page: TestLeafletPage;

  beforeEach(() => {
    page = new TestLeafletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
