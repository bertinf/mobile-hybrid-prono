import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'
/**
 * Generated class for the ParametrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html',
})
export class ParametrePage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  	}
	
	ionViewDidLoad() {
	}

	logout(): void {
      this.auth.logout();
    }
}
