"use strict";
class Pessoa {
    constructor(nome, dataNasc, sexo) {
        this._nome = nome;
        this._dataNasc = dataNasc;
        this._sexo = sexo;
    }
    get getNome() {
        return this._nome;
    }
    get gdataNasc() {
        return this._dataNasc;
    }
    get gsexo() {
        return this._sexo;
    }
}
class Aluno extends Pessoa {
    constructor(matricula, nome, dataNasc, sexo) {
        super(nome, dataNasc, sexo);
        this._numMatricula = matricula;
    }
    get numMatricula() {
        return this._numMatricula;
    }
}
class Professor extends Pessoa {
    constructor(nome, dataNasc, sexo, categoria, titulo) {
        super(nome, dataNasc, sexo);
        this._categoria = categoria;
        this._titulo = titulo;
    }
    get getCategoria() {
        return this._categoria;
    }
    get titulo() {
        return this._titulo;
    }
}
class Disciplina {
    constructor(nome, cod) {
        this._nome = nome;
        this._codigo = cod;
    }
    get nomeDisciplina() {
        return this._nome;
    }
    get codDisc() {
        return this._codigo;
    }
}
class Turma {
    constructor(id, professor, disciplina, listaAlunos, horarioTurma) {
        this._idTurma = id;
        this._professor = professor;
        this._disciplinas = disciplina;
        this._listaAlunos = listaAlunos;
        this._horario = horarioTurma;
    }
    get idTurma() {
        return this._idTurma;
    }
    get listaDeAlunos() {
        return this._listaAlunos;
    }
    get professorTurma() {
        return this._professor;
    }
    get DisciplinasTurma() {
        return this._disciplinas;
    }
    get horario() {
        return this._horario;
    }
}
var professorTeste = new Professor('Laercio Augusto Baldochi Junior', new Date("1999-11-10"), 'M', 'Titular', "Doutor");
var aluno1 = new Aluno(1010101, "Dante", new Date("1999-12-12"), 'M');
var aluno2 = new Aluno(2020202, "Ian", new Date("1999-11-11"), 'M');
var aluno3 = new Aluno(3030303, "Noah", new Date("1999-10-10"), 'M');
var aluno4 = new Aluno(4040404, "Atena", new Date("1999-12-12"), 'F');
var aluno5 = new Aluno(5050505, "Lana", new Date("1999-12-12"), 'F');
let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
var disciplina = new Disciplina("Desenvolvimento Web", "COM222");
var turma01 = new Turma(1, professorTeste, disciplina, listaAlunos, "3T3 6T12 3T45");
console.log("--------------------------------TURMA--------------------------------");
console.log("Id da turma: " + turma01.idTurma);
console.log("Horario: " + turma01.horario);
console.log("");
console.log("------------------------------PROFESSOR------------------------------");
console.log("Professor: " + turma01.professorTurma.getNome);
console.log("Categoria: " + turma01.professorTurma.getCategoria);
console.log("Titulo: " + turma01.professorTurma.titulo);
console.log("Disciplina: " + turma01.DisciplinasTurma.nomeDisciplina + " - " + turma01.DisciplinasTurma.codDisc);
console.log("");
console.log("-------------------------------ALUNOS--------------------------------");
turma01.listaDeAlunos.forEach(function (Element) {
    console.log("---------------------------------------------------------------------");
    console.log("Nome do aluno: " + Element.getNome);
    console.log("Matricula: " + Element.numMatricula);
    console.log("Data de nascimento: " + Element.gdataNasc);
    console.log("Sexo: " + Element.gsexo);
});
