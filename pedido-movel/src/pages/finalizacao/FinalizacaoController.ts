import { SeniorStoreTool } from './../../app/app.component';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'finalizacao.html',
})
export class FinalizacaoController {


  constructor(public navCtrl: NavController) {

  }

  voltar() {
    this.navCtrl.setRoot(SeniorStoreTool);
  }
}