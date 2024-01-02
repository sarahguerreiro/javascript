export class Pessoa {
    nome
    idade
    sexo
    dataNascimento
    dia
    
    constructor(){
        
    }

    fazerAniv(data) {
        let dataAtual = new Date()

        if (data === dataAtual.getFullYear()) {
            console.log('feliz aniver!')
        }
    }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = nome
    }

    getIdade() {
        return this.idade
    }

    setIdade(idade) {
        this.idade = idade
    }

    getSexo() {
        return this.sexo
    }
    
    setSexo(sexo) {
        this.sexo = sexo
    }

    getDataNascimento() {
        return this.dataNascimento
    }
    
    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento
    }
}


const p1 = new Pessoa()

 p1.setDataNascimento(2024)

 console.log(p1.getDataNascimento());
 
 p1.fazerAniv(p1.getDataNascimento())
 
 console.log(p1.dia = 'tarde');