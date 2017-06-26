import { Injectable } from '@angular/core';
import { Produto } from '../entidades/Produto';

@Injectable()
export class PedidoService {

    products: Array<Produto>;

    constructor() {
        this.products = new Array<Produto>();
    }

    addProduct(product: Produto){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    getValor(){
        let total: number = 0;
        this.products.forEach(produto => total += produto.preco);
        return total;
    }

}