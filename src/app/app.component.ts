import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // firebase.auth().onAuthStateChanged(user => {
      //       if (user) {
      //           this.rootPage = TabsPage
      //       } else {
      //           this.rootPage = LoginPage
      //       }
      //   })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}