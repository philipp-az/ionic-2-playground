import {App, Platform, Page, NavController, NavParams} from 'ionic/ionic';
import {Component} from 'angular2/core';

import {Page1} from './pages/page1/page1';


@Component({
  selector: 'my-component',
  template: '<p>MY COMPONENT</p>'
})
class MyComp {
  constructor() {

  }
}


@App({
  templateUrl: 'build/app.html',
  config: {},
  directives: [MyComp]
})
export class MyApp {

  // injecting NavController throws following exception:
  // "EXCEPTION: No provider for NavController! (MyApp -> NavController)"
  constructor(platform: Platform) {
    // this.nav = nav;

    this.rootPage = Page1;


    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

}
