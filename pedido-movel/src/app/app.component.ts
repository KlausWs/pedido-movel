import { ClienteController } from './../pages/cliente/ClienteController';
import { PedidoController } from './../pages/pedido/PedidoController';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { GruposController } from '../pages/grupos/GruposController';


@Component({
  templateUrl: 'app.html'
})
export class SeniorStoreTool {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GruposController;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Carrinho', component: PedidoController },
      { title: 'Cliente', component: ClienteController },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

}
