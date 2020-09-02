import { by, element } from 'protractor';

export class BasePO {

  getHeaderComponent() {
    return element(by.tagName('f-navigation-header'));
  }

  getfooterComponent() {
    return element(by.tagName('f-navigation-footer'));
  }

}
