webpackJsonp([6],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(afAuth, afDatabase, navCtrl) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.pronos = this.afDatabase.object("prono");
        this.pronos.subscribe(function (snapshot) {
            alert(snapshot);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n <!--  <ion-item *ngFor="let prono of pronos$ | async">\n    <b>{{(prono | async)?.username}}</b><br>\n    \n  </ion-item> -->\n\n\n  <p>ceci est un test new version v5</p>\n\n\n\n\n\n\n\n<!-- <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/marty-avatar.png">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n\n  <ion-card-content>\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/marty-avatar.png">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n\n  <ion-card-content>\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.auth = auth;
        this.signupForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.email = this.signupForm.controls['email'];
        this.password = this.signupForm.controls['password'];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.submit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            var credentials = ({ email: this.email.value, password: this.password.value });
            this.auth.registerUser(credentials).subscribe(function (registerData) {
                console.log(registerData);
                alert('User is registered and logged in.');
                _this.navCtrl.setRoot('ProfilePage');
            }, function (registerError) {
                console.log(registerError);
                if (registerError.code === 'auth/weak-password' || registerError.code === 'auth/email-already-in-use') {
                    alert(registerError.message);
                }
                _this.error = registerError;
            });
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-title>Signup</ion-title>\n  <form [formGroup]="signupForm" (ngSubmit)="submit()" novalidate>\n      <ion-row>\n        <ion-item>\n            <ion-label for="email"></ion-label>\n            <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n            <ion-label for="password"></ion-label>\n            <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n          <button ion-button type="submit" block>Sign up</button>\n      </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.auth = auth;
        this.resetPasswordForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])]
        });
        this.email = this.resetPasswordForm.controls['email'];
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ResetPasswordPage.prototype.submit = function () {
        var _this = this;
        if (this.resetPasswordForm.valid) {
            this.auth.resetPassword(this.email.value).subscribe(function (registerData) {
                alert('Password recovery link is sent.');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }, function (registerError) {
                console.log(registerError);
                if (registerError.code === 'auth/user-not-found') {
                    alert(registerError.message);
                }
            });
        }
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-password',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/reset-password/reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ResetPassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="resetPasswordForm" (ngSubmit)="submit()" novalidate>\n	    <ion-row>\n	      <ion-item>\n	        <ion-label for="email"></ion-label>\n	        <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n	    </ion-item>\n	    </ion-row>\n	    <ion-row>\n	      <button ion-button type="submit" block>Reset password</button>\n	    </ion-row>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/reset-password/reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_profil_view_profil__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parametre_parametre__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__view_profil_view_profil__["a" /* ViewProfilPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__parametre_parametre__["a" /* ParametrePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="ios-contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Paramètre" tabIcon="ios-cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ViewProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewProfilPage = (function () {
    function ViewProfilPage(afAuth, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prono = {};
    }
    ViewProfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data) {
                _this.profileData = _this.afDatabase.object("profile/" + data.uid);
                _this.profileData.subscribe(function (snapshot) {
                    _this.prono.username = snapshot.username;
                });
            }
        });
        console.log('ionViewDidLoad ViewProfilPage');
    };
    ViewProfilPage.prototype.addProno = function () {
        // this.afDatabase.object(`prono/`).set(this.prono)
        // .then( () => this.navCtrl.setRoot(HomePage));
        var _this = this;
        this.afDatabase.list('/prono').push(null).then(function (ref) {
            ref.push(_this.prono);
        }).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
    };
    return ViewProfilPage;
}());
ViewProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-view-profil',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/view-profil/view-profil.html"*/'<!--\n  Generated template for the ViewProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<h1>Profile</h1>\n\n	<p>Username : {{ (profileData | async)?.username }}</p>\n	<p>First name : {{ (profileData | async)?.firstName }}</p>\n	<p>Last name : {{ (profileData | async)?.lastName }}</p>\n	\n  \n    \n    <ion-label color="primary">Enter prono</ion-label>\n    <ion-textarea [(ngModel)]="prono.message" placeholder="Your prono"></ion-textarea>\n    \n\n    <button ion-button clear block (click)="addProno()">Publish</button>\n    \n\n  \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/view-profil/view-profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
], ViewProfilPage);

//# sourceMappingURL=view-profil.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ParametrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParametrePage = (function () {
    function ParametrePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    ParametrePage.prototype.ionViewDidLoad = function () {
    };
    ParametrePage.prototype.logout = function () {
        this.auth.logout();
    };
    return ParametrePage;
}());
ParametrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-parametre',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/parametre/parametre.html"*/'<!--\n  Generated template for the ParametrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Parametre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form novalidate>\n		<ion-row> \n	        <button (click)="logout()" ion-button block color="danger">Log out</button>\n	    </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/parametre/parametre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], ParametrePage);

//# sourceMappingURL=parametre.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		420,
		5
	],
	"../pages/parametre/parametre.module": [
		421,
		4
	],
	"../pages/profile/profile.module": [
		422,
		0
	],
	"../pages/reset-password/reset-password.module": [
		423,
		3
	],
	"../pages/signup/signup.module": [
		424,
		2
	],
	"../pages/view-profil/view-profil.module": [
		425,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_view_profil_view_profil__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_parametre_parametre__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { AngularFireAuth } from 'angularfire2/auth';



// import { AngularFireDatabaseModule } from 'angularfire2/database';



var firebaseConfig = {
    apiKey: "AIzaSyBPaXNpbUWHGLCNtI_q_lAlUl_ANg6x21o",
    authDomain: "prono-87549.firebaseapp.com",
    databaseURL: "https://prono-87549.firebaseio.com",
    projectId: "prono-87549",
    storageBucket: "prono-87549.appspot.com",
    messagingSenderId: "68905693596"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_view_profil_view_profil__["a" /* ViewProfilPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_parametre_parametre__["a" /* ParametrePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__["a" /* ResetPasswordPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parametre/parametre.module#ParametrePageModule', name: 'ParametrePage', segment: 'parametre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-profil/view-profil.module#ViewProfilPageModule', name: 'ViewProfilPage', segment: 'view-profil', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_view_profil_view_profil__["a" /* ViewProfilPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_parametre_parametre__["a" /* ParametrePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__["a" /* ResetPasswordPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
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
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(af) {
        this.af = af;
    }
    AuthProvider.prototype.loginWithEmail = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function (authData) {
                //console.log(authData);
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.registerUser = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (authData) {
                //this.af.auth.currentUser.updateProfile({displayName: credentials.displayName, photoURL: credentials.photoUrl}); //set name and photo
                observer.next(authData);
            }).catch(function (error) {
                //console.log(error);
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (emailAddress) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.sendPasswordResetEmail(emailAddress).then(function (success) {
                //console.log('email sent', success);
                observer.next(success);
            }, function (error) {
                //console.log('error sending email',error);
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.af.auth.signOut();
    };
    Object.defineProperty(AuthProvider.prototype, "currentUser", {
        get: function () {
            return this.af.auth.currentUser ? this.af.auth.currentUser.email : null;
        },
        enumerable: true,
        configurable: true
    });
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, fb, auth) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.auth = auth;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */];
        this.resetPasswordPage = __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */];
        this.loginForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            //console.log(this.email.value, this.password.value);
            //alert('Implement authentication');
            var credentials = ({ email: this.email.value, password: this.password.value }); //Added next lines
            this.auth.loginWithEmail(credentials).subscribe(function (data) {
                console.log(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                console.log(error);
                if (error.code == 'auth/user-not-found') {
                    alert('User not found');
                }
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row>\n        <ion-item>\n            <div *ngIf="auth.currentUser">current user is {{auth.currentUser}}</div>\n        </ion-item>\n    </ion-row>\n	<form [formGroup]="loginForm" novalidate>\n	    <ion-row>\n	        <ion-item>\n	            <ion-label for="email"></ion-label>\n	            <ion-input type="email" value="" placeholder="Email" formControlName="email"></ion-input>\n	        </ion-item>\n	    </ion-row>\n	    <ion-row>\n	        <ion-item>\n	            <ion-label for="password"></ion-label>\n	            <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n	        </ion-item>\n	    </ion-row>\n	    <ion-row>\n	        <button (click)="login()" ion-button block>Log in</button>\n	    </ion-row>\n	    <ion-row> \n        	<button [navPush]="signupPage" ion-button block>Sign up</button>\n    	</ion-row>\n    	<ion-row> \n	        <button [navPush]="resetPasswordPage" ion-button block clear>Reset password</button>\n	    </ion-row>\n\n  	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fabienBertinelli/Desktop/Mobile class/cyrilProject/prono/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map