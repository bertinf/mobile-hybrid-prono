import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProfilPage } from './view-profil';

@NgModule({
  declarations: [
    ViewProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewProfilPage),
  ],
})
export class ViewProfilPageModule {}
