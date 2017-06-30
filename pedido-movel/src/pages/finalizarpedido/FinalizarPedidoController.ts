import { GruposController } from './../grupos/GruposController';
import { ViewController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'finalizarpedido.html',
})
export class FinalizarPedidoController {

    constructor(public viewCtrl: ViewController, public navCtrl: NavController) {

    }

    ok() {
        this.navCtrl.setRoot(GruposController);
    }

}