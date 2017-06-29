import { Cliente } from './../../entidades/Cliente';
import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    templateUrl: 'identificarcliente.html',
})
export class IdentificarClienteController {

    constructor(public viewCtrl: ViewController) {

    }

    dismiss() {
        let cliente = new Cliente();
        cliente.nome = 'Augusto';
        cliente.sobrenome = 'Scher';
        cliente.codigo = '5465';
        cliente.cpf = '02506196013';
        cliente.telefone = '98861-3969';
        this.viewCtrl.dismiss(cliente);
    }

}