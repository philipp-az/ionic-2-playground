import {Page, NavController} from 'ionic/ionic';

import {Page2} from '../../pages/page2/page2';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav;

    this.page = Page2;
  }

  gotoPage(page: Page) {
    this.nav.push(page);
  }
}
