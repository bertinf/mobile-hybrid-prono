import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ViewProfilPage } from '../pages/view-profil/view-profil';
import { ParametrePage } from '../pages/parametre/parametre';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { Camera } from '@ionic-native/camera';
// import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AuthProvider} from '../providers/auth/auth';

import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
 
export const firebaseConfig = {
    apiKey: "AIzaSyBPaXNpbUWHGLCNtI_q_lAlUl_ANg6x21o",
    authDomain: "prono-87549.firebaseapp.com",
    databaseURL: "https://prono-87549.firebaseio.com",
    projectId: "prono-87549",
    storageBucket: "prono-87549.appspot.com",
    messagingSenderId: "68905693596"
};

@NgModule({
  declarations: [
    MyApp,
    ViewProfilPage,
    ParametrePage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ViewProfilPage,
    ParametrePage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera
   
  ]
})
export class AppModule {}
