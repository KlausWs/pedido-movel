import { ClienteController } from './../pages/cliente/ClienteController';
import { ConsultaClienteController } from './../pages/consultacliente/ConsultaClienteController';
import { NavController } from 'ionic-angular';
import { Component, Injectable } from '@angular/core';

@Component({
  templateUrl: "footer.html",
  selector: "appfooter"
})
export class FooterComponent{

constructor(public navCtrl: NavController){

}
    
  irParaTodosClientes(){
    this.navCtrl.push(ConsultaClienteController);
  }

  irParaCadastroClientes(){
    this.navCtrl.push(ClienteController);
  }
}

