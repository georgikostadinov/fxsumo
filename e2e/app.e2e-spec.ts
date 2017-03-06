import { FxSumoTestPage } from './app.po';

describe('fx-sumo-test App', () => {
  let page: FxSumoTestPage;

  beforeEach(() => {
    page = new FxSumoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
