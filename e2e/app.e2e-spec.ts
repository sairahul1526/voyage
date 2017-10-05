import { VoyagePage } from './app.po';

describe('voyage App', () => {
  let page: VoyagePage;

  beforeEach(() => {
    page = new VoyagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
