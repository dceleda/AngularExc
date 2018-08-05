import { TddPoCPage } from './app.po';

describe('tdd-po-c App', () => {
  let page: TddPoCPage;

  beforeEach(() => {
    page = new TddPoCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
