import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosController } from '../produtos/ProdutosController';

@Component({
  templateUrl: 'grupos.html',
})
export class GruposController { 
  
  constructor(public navCtrl: NavController) {

  }

  search() {
    this.navCtrl.push(ProdutosController);
  }

}