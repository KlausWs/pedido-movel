import { Cliente } from './../../entidades/Cliente';
import { ViewController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    templateUrl: 'identificarcliente.html',
})
export class IdentificarClienteController {

    constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    }

    dismiss() {
        this.navCtrl.pop();
    }

}