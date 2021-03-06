import { Injectable } from '@angular/core';
import { Cliente } from '../entidades/Cliente';

@Injectable()
export class ClienteService {

    clientes: Array<Cliente>;

    constructor() {
        this.initializeClients();
    }

    public gravar(clienteParam: Cliente){
        let idx = this.clientes.findIndex(cliente => cliente.cpf === clienteParam.cpf);
        if (idx > -1){
            this.alterar(clienteParam, idx);
        } else {
            this.incluir(clienteParam);
        }
    }

    private incluir(cliente: Cliente){
        this.clientes.push(cliente);
    }

    private alterar(clienteParam: Cliente, idx: number){
        this.clientes.splice(idx, 1, clienteParam);
    }

    public filterByText(value: string){
        return this.clientes.filter(cliente => cliente.nome.indexOf(value.toUpperCase()) >= 0 || cliente.sobrenome.indexOf(value.toUpperCase()) >= 0 || cliente.cpf.indexOf(value.toUpperCase()) >= 0 || cliente.codigo.indexOf(value.toUpperCase()) >= 0) ;
    }

    private initializeClients() {
        this.clientes = [
            { nome: 'Daniara', sobrenome: 'Maciel Rodrigues', cpf: '71284972186', codigo: '54532', email: 'JPMAQUINA@LIVE.COM', endereco: 'Rua das Missões, Ponta Aguda, Blumenau', dataNascimento: new Date(), telefone: '4888059880' },
            { nome: 'Jucelia', sobrenome: 'Rosso Canteli', cpf: '87676679109', codigo: '43577', email: 'JUCELIAJM@GMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899942011' },
            { nome: 'VALDECIR', sobrenome: 'HIPOLITO DOS SANTOS', cpf: '53135856224', codigo: '161636', email: 'VALDECIR_VHS@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896472013' },
            { nome: 'LUANA', sobrenome: 'AGUIAR SARTOR', cpf: '22744152420', codigo: '9048', email: 'ATENDIMENTO01@CONSORCIOCARLESSI.COM.BR', endereco: '', dataNascimento: null, telefone: '4899950575' },
            { nome: 'MAURI', sobrenome: 'BEZ BATTI', cpf: '30188834621', codigo: '62635', email: 'MAURIBEZBATTI@GMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899724416' },
            { nome: 'VANESSA', sobrenome: 'MUNARETTO CASEMIRO', cpf: '31758915439', codigo: '38775', email: 'VANESSAMUNARETTO@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899246026' },
            { nome: 'DIOUGLAS', sobrenome: 'MACIEL RODRIGUES', cpf: '98303681656', codigo: '53642', email: 'DIOUGLAS_@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899792992' },
            { nome: 'MAURO', sobrenome: 'ROSSO', cpf: '34529316335', codigo: '63549', email: 'MAURO.ROSSO@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4888552288' },
            { nome: 'RENAN', sobrenome: 'RAMOS', cpf: '36683814376', codigo: '147230', email: 'RENANRAMOS90@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896010051' },
            { nome: 'LUCIANA', sobrenome: 'BIZ FELTRIN', cpf: '56459717796', codigo: '3935', email: 'LUBIZFELTRIN@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899245771' },
            { nome: 'JOEL', sobrenome: 'COELHO DA ROSA', cpf: '95242444541', codigo: '45358', email: 'JOELDAROSA14@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899381382' },
            { nome: 'MAURO', sobrenome: 'CANDIDO CAMBRUZZI', cpf: '21037191668', codigo: '45749', email: 'MAURO_CC@LIVE.COM', endereco: '', dataNascimento: null, telefone: '4898383692' },
            { nome: 'DEYSE', sobrenome: 'PACHECO BORBA', cpf: '56342472769', codigo: '45844', email: 'DAYSE.PACHECO@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896753603' },
            { nome: 'ALINE', sobrenome: 'ANTONIN SCHEFER', cpf: '40157377334', codigo: '45724', email: 'ANTONINSCHEFER@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4888050253' },
            { nome: 'ARALDO', sobrenome: 'KRUGER', cpf: '54433633364', codigo: '138865', email: 'ARALDOKRUGER@GMAIL.COM', endereco: '', dataNascimento: null, telefone: '4888453396' },
            { nome: 'ANGELICA', sobrenome: 'SEMPREBOM GOMES', cpf: '48146922341', codigo: '46042', email: 'ANGELIKA_SEMPREBOM@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4899318249' },
            { nome: 'DANIELLE', sobrenome: 'RECO DE NES', cpf: '98674686273', codigo: '46095', email: 'DANY_DENES@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896048454' },
            { nome: 'LUCAS DEREK', sobrenome: 'SOUZA VIEIRA', cpf: '13217882156', codigo: '31598', email: 'LUCCAS_963@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896445346' },
            { nome: 'TAIS', sobrenome: 'NEOTTI MAIA', cpf: '47671965154', codigo: '159911', email: 'TAISNEOTTY@HOTMAIL.COM', endereco: '', dataNascimento: null, telefone: '4896533826' }
        ];
    }
}