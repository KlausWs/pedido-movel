import { PedidoController } from './../pedido/PedidoController';
import { ClienteController } from './../cliente/ClienteController';
import { Grupo } from './../../entidades/Grupo';
import { GrupoService } from './../../services/GrupoService';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutosController } from '../produtos/ProdutosController';


@Component({
  templateUrl: 'grupos.html'
})
export class GruposController {

  grupoService: GrupoService;
  listaClientes: ClienteController;
  clientes: ClienteController;


  constructor(public navCtrl: NavController, _grupoService: GrupoService, navParams: NavParams) {
    this.grupoService = _grupoService;
  }

  searchByGroup(grupo: Grupo) {
    this.navCtrl.push(ProdutosController, { grupo: grupo });
  }
  
}

