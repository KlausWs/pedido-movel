import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    templateUrl: 'identificarcliente.html',
})
export class IdentificarClienteController {

    constructor(public viewCtrl: ViewController) {

    }

    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }

}