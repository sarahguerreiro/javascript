/*import { Pessoa } from "./Pessoa";*/
import { Aluno } from "./Aluno.js";
import { Funcionario } from "./Funcionario.js";
import { Professor } from "./Professor.js";

const p1 = new Pessoa(await import("./Pessoa.js")).Pessoa();
const p2 = new Aluno()
const p3 = new Professor()
const p4 = new Funcionario()

p1.setNome('Sarah')
p2.setCurso('JavaScript')
p3.setSalario('2500.75')
p4.setSetor('Desenvolvimento Front-End')

p3.recebeAumento(550.25)