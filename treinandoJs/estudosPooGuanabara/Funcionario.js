import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    nome
    idade
    sexo
    setor
    trabalhando

    constructor() {
        super(nome, idade, sexo)
        this.setor = setor
        this.trabalhando = trabalhando
    }

    mudar(){
        
    }
}