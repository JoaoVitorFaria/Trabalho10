abstract class Pessoa{
    private _nome : string
    private _dataNasc : Date
    private _sexo : CharacterData

    constructor(nome: string, dataNasc: Date, sexo: CharacterData){
        this._nome = nome
        this._dataNasc = dataNasc
        this._sexo = sexo
    }

    get nome():string{
        return this.nome
    }

    get dataNasc(): Date{
        return this._dataNasc
    }

    get sexo(): CharacterData{
        return this._sexo
    }
}

class Aluno extends Pessoa{
    constructor(nome: string, dataNasc:Date, sexo:CharacterData){
        super(nome, dataNasc, sexo)
    }
}

class Professor extends Pessoa{
    private _categoria: string
    constructor(nome: string, dataNasc:Date, sexo:CharacterData, categoria: string){
        super(nome, dataNasc, sexo)
        this._categoria = categoria
    }

    get categoria():string{
        return this._categoria
    }
}

class Disciplina{
    private _nome: string
    private _turmas : Array<Turma>

    constructor(nome: string,turmas : Array<Turma>){
        this._nome = nome
        this._turmas = turmas
    }

    get nomeDisciplina():string{
        return this._nome
    }

    get turmasDisciplina():Array<Turma>{
        return this._turmas
    }

    set addTurma(turma: Turma){
        this._turmas.push(turma)
    }
}

class Turma{
    private _listaAlunos:Array<Aluno>
    private _professor: Professor
    private _disciplinas: Array<Disciplina>

    constructor(listaAluno:Array<Aluno>, professor: Professor,disciplinas: Array<Disciplina> ){
        this._listaAlunos  = listaAluno;
        this._professor = professor
        this._disciplinas = disciplinas
    }
    get listaAlunos():Array<Aluno>{
        return this._listaAlunos
    }
    get professorTurma():Professor{
        return this._professor
    }
    get DisciplinasTurma():Array<Disciplina>{
        return this._disciplinas
    }

    set addAluno(aluno: Aluno){
        this._listaAlunos.push(aluno)
    }

    set addProfesor(professor: Professor){
        this._professor = professor
    }

    set addDisciplina(disciplina : Disciplina){
        this._disciplinas.push(disciplina)
    }
}


