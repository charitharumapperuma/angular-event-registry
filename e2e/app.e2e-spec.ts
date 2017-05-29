import { EventRegistryPage } from './app.po';

describe('event-registry App', () => {
  let page: EventRegistryPage;

  beforeEach(() => {
    page = new EventRegistryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
