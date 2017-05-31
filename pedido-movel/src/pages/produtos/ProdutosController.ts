import { Component } from '@angular/core';
import { ProdutoService } from '../../../services/ProdutoService';
import { Produto } from '../../../entidades/Produto';

@Component({
  templateUrl: 'produtos.html',
  providers: [ProdutoService]
})

export class ProdutosController { 

  produtoService: ProdutoService;

  constructor(private _produtoService: ProdutoService) { 
    this.produtoService = _produtoService;
  }
  
}