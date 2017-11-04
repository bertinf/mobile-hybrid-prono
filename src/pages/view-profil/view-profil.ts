import { Profile } from './../../models/profile';
import { Prono } from './../../models/prono';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';


/**
 * Generated class for the ViewProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profil',
  templateUrl: 'view-profil.html',
})
export class ViewProfilPage {

	profileData: FirebaseObjectObservable<Profile>;
  prono = {} as Prono;
  

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase ,
  	public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    this.afAuth.authState.subscribe( data => {

    	if (data) {
    		this.profileData = this.afDatabase.object(`profile/${data.uid}`);
        this.profileData.subscribe(snapshot => {
          this.prono.username = snapshot.username;
        });
    	}

    })

    console.log('ionViewDidLoad ViewProfilPage');
  }

  addProno() {
   // this.afDatabase.object(`prono/`).set(this.prono)
      // .then( () => this.navCtrl.setRoot(HomePage));
    
    this.afDatabase.list('/prono').push(null).then(( ref ) => {
      ref.push(this.prono);
    }).then( () => this.navCtrl.setRoot(HomePage));
        
  }

}
