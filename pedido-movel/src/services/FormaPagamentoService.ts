import { FormaPagamento } from './../entidades/FormaPagamento';
import { Injectable } from '@angular/core';

@Injectable()
export class FormaPagamentoService {

    formas: Array<FormaPagamento>;

    constructor() {
        this.initializeConditions();
    }

    initializeConditions() {
        this.formas = [
            { codigo: 1, descricao: 'Crediário' },
            { codigo: 2, descricao: 'Boleto' }
        ];
    }

    getFormas(){
        return this.formas;
    }

}