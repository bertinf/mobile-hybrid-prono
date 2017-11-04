import { Prono } from './../../models/prono';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	// pronos: Array<any> = [];
	pronos: FirebaseObjectObservable<Prono>;

	constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase ,
		public navCtrl: NavController) {

	}

	ionViewDidLoad() {
		this.pronos = this.afDatabase.object(`prono`);
		this.pronos.subscribe(snapshot => {
          console.log(snapshot);
        });
	}

}
