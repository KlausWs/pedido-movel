import { CondicaoPagamento } from './../entidades/CondicaoPagamento';
import { Injectable } from '@angular/core';

@Injectable()
export class CondicaoPagamentoService {

    condicoes: Array<CondicaoPagamento>;

    constructor() {
        this.initializeConditions();
    }

    initializeConditions() {
        this.condicoes = [
            { codigo: 1, descricao: '01 Vez Com Juros', taxaJuros: 3.99, parcelas: 1 },
            { codigo: 2, descricao: '02 Vezes Com Juros', taxaJuros: 3.99, parcelas: 2 },
            { codigo: 3, descricao: '03 Vezes Com Juros', taxaJuros: 3.99, parcelas: 3 },
            { codigo: 4, descricao: '04 Vezes Com Juros', taxaJuros: 3.99, parcelas: 4 },
            { codigo: 5, descricao: '05 Vezes Com Juros', taxaJuros: 3.99, parcelas: 5 },
            { codigo: 6, descricao: '06 Vezes Com Juros', taxaJuros: 3.99, parcelas: 6 },
            { codigo: 7, descricao: '07 Vezes Com Juros', taxaJuros: 3.99, parcelas: 7 },
            { codigo: 8, descricao: '08 Vezes Com Juros', taxaJuros: 3.99, parcelas: 8 },
            { codigo: 9, descricao: '09 Vezes Com Juros', taxaJuros: 3.99, parcelas: 9 },
            { codigo: 10, descricao: '10 Vezes Com Juros', taxaJuros: 3.99, parcelas: 10 },
            { codigo: 11, descricao: '11 Vezes Com Juros', taxaJuros: 3.99, parcelas: 11 },
            { codigo: 11, descricao: '12 Vezes Com Juros', taxaJuros: 3.99, parcelas: 12 }
        ];
    }

    getCondicoes(){
        return this.condicoes;
    }

}