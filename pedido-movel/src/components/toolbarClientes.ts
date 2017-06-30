import { IdentificarClienteController } from './../pages/identificarcliente/IdentificarClienteController';
import { NavController } from 'ionic-angular';
import { ClienteController } from './../pages/cliente/ClienteController';
import { ConsultaClienteController } from './../pages/consultacliente/ConsultaClienteController';
import { Component, Input } from '@angular/core';

@Component({
    selector: "toolbar-clientes",
    templateUrl: "toolbarclientes.html"
})
export class ToolbarClienteComponent {
    
    constructor(public navCtrl: NavController) {

    }

    irParaTodosClientes() {
        this.navCtrl.push(ConsultaClienteController);
    }

    irParaCadastroClientes() {
        this.navCtrl.push(ClienteController);
    }




}
