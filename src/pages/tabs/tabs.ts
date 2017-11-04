import { Component } from '@angular/core';

import { ViewProfilPage } from '../view-profil/view-profil';
import { ParametrePage } from '../parametre/parametre';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ViewProfilPage;
  tab3Root = ParametrePage;

  constructor() {

  }
}
