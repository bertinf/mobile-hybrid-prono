import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
 export class ProfilePage {

   profile = {} as Profile;

   constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private camera: Camera,
     public navCtrl: NavController, public navParams: NavParams) {
   }

   createProfile() {
     this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then( () => this.navCtrl.setRoot(TabsPage));

    })
   }

   

   async takePhoto() {

    let myId: string;

    this.afAuth.authState.subscribe(auth => {
      myId = auth.uid;

    })

    try { 
     const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE 
    }

    const result = await this.camera.getPicture(options)

    const image = `data:image/jpeg;base64,${result}`;

    const pictures = storage().ref(`picture/${myId}`); 
    pictures.putString(image, 'data_url');

  } catch (e) {
    console.error(e);
  }

}

ionViewDidLoad() {
  console.log('ionViewDidLoad ProfilePage');
}

}
