import { browser, by, element } from 'protractor';
import { Key } from 'selenium-webdriver';

export class TodoNgFirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  async signInAnynymous() {
    await element(by.id('loginAnynymous')).click();
    await browser.sleep(4000); // TODO: This should not be required if Angular sync is enabled
  }

  async createItem(item: string) {
    await browser.sleep(1000); // TODO: This should not be required if Angular sync is enabled
    console.log('creating item', item);
    await element(by.css('app-task-form input')).sendKeys(item);
    await element(by.css('app-task-form input')).sendKeys(Key.ENTER);
  }

  getItemCount() {
    return element.all(by.css('app-task-item')).count();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
