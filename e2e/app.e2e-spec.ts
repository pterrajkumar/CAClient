import { CAClientPage } from './app.po';

describe('caclient App', () => {
  let page: CAClientPage;

  beforeEach(() => {
    page = new CAClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
