import { Injectable } from '@angular/core';

import { Cliente } from '../entidades/Cliente';

@Injectable()
export class ClienteService {
    clientes: Array<Cliente>;

    constructor() {
        this.initializeClients();
    }


    initializeClients() {
        this.clientes = [
            { nome: 'DANIARA MACIEL RODRIGUES', codigo: '54532', email: 'JPMAQUINA@LIVE.COM', telefone: '4888059880' },
            { nome: 'JUCELIA ROSSO CANTELI', codigo: '43577', email: 'JUCELIAJM@GMAIL.COM', telefone: '4899942011' },
            { nome: 'VALDECIR HIPOLITO DOS SANTOS', codigo: '161636', email: 'VALDECIR_VHS@HOTMAIL.COM', telefone: '4896472013' },
            { nome: 'LUANA AGUIAR SARTOR', codigo: '9048', email: 'ATENDIMENTO01@CONSORCIOCARLESSI.COM.BR', telefone: '4899950575' },
            { nome: 'MAURI BEZ BATTI', codigo: '62635', email: 'MAURIBEZBATTI@GMAIL.COM', telefone: '4899724416' },
            { nome: 'VANESSA MUNARETTO CASEMIRO', codigo: '38775', email: 'VANESSAMUNARETTO@HOTMAIL.COM', telefone: '4899246026' },
            { nome: 'DIOUGLAS MACIEL RODRIGUES', codigo: '53642', email: 'DIOUGLAS_@HOTMAIL.COM', telefone: '4899792992' },
            { nome: 'MAURO ROSSO', codigo: '63549', email: 'MAURO.ROSSO@HOTMAIL.COM', telefone: '4888552288' },
            { nome: 'RENAN RAMOS', codigo: '147230', email: 'RENANRAMOS90@HOTMAIL.COM', telefone: '4896010051' },
            { nome: 'LUCIANA BIZ FELTRIN', codigo: '3935', email: 'LUBIZFELTRIN@HOTMAIL.COM', telefone: '4899245771' },
            { nome: 'JOEL COELHO DA ROSA', codigo: '45358', email: 'JOELDAROSA14@HOTMAIL.COM', telefone: '4899381382' },
            { nome: 'MAURO CANDIDO CAMBRUZZI', codigo: '45749', email: 'MAURO_CC@LIVE.COM', telefone: '4898383692' },
            { nome: 'DEYSE PACHECO BORBA', codigo: '45844', email: 'DAYSE.PACHECO@HOTMAIL.COM', telefone: '4896753603' },
            { nome: 'ALINE ANTONIN SCHEFER', codigo: '45724', email: 'ANTONINSCHEFER@HOTMAIL.COM', telefone: '4888050253' },
            { nome: 'ARALDO KRUGER', codigo: '138865', email: 'ARALDOKRUGER@GMAIL.COM', telefone: '4888453396' },
            { nome: 'ANGELICA SEMPREBOM GOMES', codigo: '46042', email: 'ANGELIKA_SEMPREBOM@HOTMAIL.COM', telefone: '4899318249' },
            { nome: 'DANIELLE RECO DE NES', codigo: '46095', email: 'DANY_DENES@HOTMAIL.COM', telefone: '4896048454' },
            { nome: 'LUCAS DEREK  SOUZA VIEIRA', codigo: '31598', email: 'LUCCAS_963@HOTMAIL.COM', telefone: '4896445346' },
            { nome: 'TAIS NEOTTI MAIA', codigo: '159911', email: 'TAISNEOTTY@HOTMAIL.COM', telefone: '4896533826' },
            { nome: 'REDECARD', codigo: '2000', email: 'MANOEL.CORREA@REDECARD.COM.BR', telefone: '08007284433' }
        ];
    }

}