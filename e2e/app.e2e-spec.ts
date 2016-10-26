import { AuthenticatePage } from './app.po';

describe('authenticate App', function() {
  let page: AuthenticatePage;

  beforeEach(() => {
    page = new AuthenticatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
