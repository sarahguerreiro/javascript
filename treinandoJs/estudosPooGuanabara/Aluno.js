import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    nome
    idade
    sexo
    matricula
    curso

    constructor(nome, idade, sexo, matricula, curso) {
        super(nome, idade, sexo);
        this.matricula = matricula;
        this.curso = curso;
    }

    cancelarMatricula() {
        
    }

    getMatricula() {

    }

    setMatricula() {

    }

    getCurso() {

    }
    setCurso() {

    }

}
