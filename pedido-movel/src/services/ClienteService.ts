import { Injectable } from '@angular/core';
import { Cliente } from '../entidades/Cliente';

@Injectable()
export class ClienteService {
    clientes: Array<Cliente>;

    constructor() {
        this.initializeClients();
    }

     filterByText(value: string){
        return this.clientes.filter(cliente => cliente.nome.indexOf(value.toUpperCase()) >= 0 || cliente.sobrenome.indexOf(value.toUpperCase()) >= 0 || cliente.cpf.indexOf(value.toUpperCase()) >= 0 || cliente.codigo.indexOf(value.toUpperCase()) >= 0) ;
    }

    initializeClients() {
        this.clientes = [
            { nome: 'DANIARA', sobrenome: 'MACIEL RODRIGUES', cpf: '13217882156', codigo: '54532', email: 'JPMAQUINA@LIVE.COM', telefone: '4888059880' },
            { nome: 'JUCELIA', sobrenome: 'ROSSO CANTELI', cpf: '13217882156', codigo: '43577', email: 'JUCELIAJM@GMAIL.COM', telefone: '4899942011' },
            { nome: 'VALDECIR', sobrenome: 'HIPOLITO DOS SANTOS', cpf: '13217882156', codigo: '161636', email: 'VALDECIR_VHS@HOTMAIL.COM', telefone: '4896472013' },
            { nome: 'LUANA', sobrenome: 'AGUIAR SARTOR', cpf: '13217882156', codigo: '9048', email: 'ATENDIMENTO01@CONSORCIOCARLESSI.COM.BR', telefone: '4899950575' },
            { nome: 'MAURI', sobrenome: 'BEZ BATTI', cpf: '13217882156', codigo: '62635', email: 'MAURIBEZBATTI@GMAIL.COM', telefone: '4899724416' },
            { nome: 'VANESSA', sobrenome: 'MUNARETTO CASEMIRO', cpf: '13217882156', codigo: '38775', email: 'VANESSAMUNARETTO@HOTMAIL.COM', telefone: '4899246026' },
            { nome: 'DIOUGLAS', sobrenome: 'MACIEL RODRIGUES', cpf: '13217882156', codigo: '53642', email: 'DIOUGLAS_@HOTMAIL.COM', telefone: '4899792992' },
            { nome: 'MAURO', sobrenome: 'ROSSO', cpf: '13217882156', codigo: '63549', email: 'MAURO.ROSSO@HOTMAIL.COM', telefone: '4888552288' },
            { nome: 'RENAN', sobrenome: 'RAMOS', cpf: '13217882156', codigo: '147230', email: 'RENANRAMOS90@HOTMAIL.COM', telefone: '4896010051' },
            { nome: 'LUCIANA', sobrenome: 'BIZ FELTRIN', cpf: '13217882156', codigo: '3935', email: 'LUBIZFELTRIN@HOTMAIL.COM', telefone: '4899245771' },
            { nome: 'JOEL', sobrenome: 'COELHO DA ROSA', cpf: '13217882156', codigo: '45358', email: 'JOELDAROSA14@HOTMAIL.COM', telefone: '4899381382' },
            { nome: 'MAURO', sobrenome: 'CANDIDO CAMBRUZZI', cpf: '13217882156', codigo: '45749', email: 'MAURO_CC@LIVE.COM', telefone: '4898383692' },
            { nome: 'DEYSE', sobrenome: 'PACHECO BORBA', cpf: '13217882156', codigo: '45844', email: 'DAYSE.PACHECO@HOTMAIL.COM', telefone: '4896753603' },
            { nome: 'ALINE', sobrenome: 'ANTONIN SCHEFER', cpf: '13217882156', codigo: '45724', email: 'ANTONINSCHEFER@HOTMAIL.COM', telefone: '4888050253' },
            { nome: 'ARALDO', sobrenome: 'KRUGER', cpf: '13217882156', codigo: '138865', email: 'ARALDOKRUGER@GMAIL.COM', telefone: '4888453396' },
            { nome: 'ANGELICA', sobrenome: 'SEMPREBOM GOMES', cpf: '13217882156', codigo: '46042', email: 'ANGELIKA_SEMPREBOM@HOTMAIL.COM', telefone: '4899318249' },
            { nome: 'DANIELLE', sobrenome: 'RECO DE NES', cpf: '13217882156', codigo: '46095', email: 'DANY_DENES@HOTMAIL.COM', telefone: '4896048454' },
            { nome: 'LUCAS DEREK', sobrenome: 'SOUZA VIEIRA', cpf: '13217882156', codigo: '31598', email: 'LUCCAS_963@HOTMAIL.COM', telefone: '4896445346' },
            { nome: 'TAIS', sobrenome: 'NEOTTI MAIA', cpf: '47671965154', codigo: '159911', email: 'TAISNEOTTY@HOTMAIL.COM', telefone: '4896533826' }
        ];
    }
}