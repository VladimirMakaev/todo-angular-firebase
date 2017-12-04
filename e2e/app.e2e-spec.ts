import { TodoNgFirebasePage } from './app.po';
import { browser } from 'protractor';


describe('App', () => {
  let page: TodoNgFirebasePage;

  beforeEach(() => {
    page = new TodoNgFirebasePage();
  });

  it('should create todo-items', async () => {
    // browser.ignoreSynchronization = true;
    await page.navigateTo();
    await page.signInAnynymous()
    await page.createItem('Item 1');
    await page.createItem('item 2');
    expect(page.getItemCount()).toEqual(2);
  });
});
