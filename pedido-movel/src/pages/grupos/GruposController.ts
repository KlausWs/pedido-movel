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

  tab1Root: any = ClienteController;
  tab2Root: any = ClienteController;
  mySelectedIndex: number;


  constructor(public navCtrl: NavController, _grupoService: GrupoService, navParams: NavParams) {
    this.grupoService = _grupoService;
    if (!navParams.data.tabIndex) {
      //this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
  }

  searchByGroup(grupo: Grupo) {
    this.navCtrl.push(ProdutosController, { grupo: grupo });
  }

  searchByText(ev: any) {
    this.navCtrl.push(ProdutosController, { value: ev.target.value });
  }
}

