import { ProdutosController } from './../pages/produtos/ProdutosController';
import { PedidoController } from './../pages/pedido/PedidoController';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: "buttonPedido.html",
  selector: "button-pedido"
})
export class ButtonPedidoComponent{

constructor(public navCtrl: NavController){

}
    
  irParaCarrinho(){
    this.navCtrl.push(PedidoController);
  }

  irParaProdutos(){
    this.navCtrl.push(ProdutosController);
  }
}

