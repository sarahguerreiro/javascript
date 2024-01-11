import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {
    nome
    idade
    sexo
    especialidade
    salario

    constructor() {
        super(nome, idade, sexo)
        this.especialidade = especialidade
        this.salario = salario
    }

    recebeAumento() {

    }
}