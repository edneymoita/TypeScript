//Boolean
const contaPaga: boolean = false;

//Number

const idade: number = 23;
const nota: number = 4.5

// String
const nome: string = 'Edney';

// Array
const pares: number[] = [2, 4, 8];
const impares: Array<number> = [1, 3, 5];

// Tuple
let jogadores: [string, string, string];
jogadores = ['edney', 'farias', 'moita'];

// enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusPedido: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoAPI: any[] = [123, 'Edney', false];
const retornoAPI2: any = {
    // ....
}

// void
function printaNaTela(msg: string): void{
    console.log(msg);
}

// null e undefined
const und: undefined = undefined;
const nu: null = null;

// object
function criar(object: object){
    // ....
}
// criar('edney')

// Union Types
const notaFinal: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias

type funcionarios = Array<string>;
const func: funcionarios = ['Edney', 'Gil', 'Bruno'];

function tratarFuncionarios(func: funcionarios){
    // ....
}

type empregado = {
    nome: string;
    sobrenome: string;
    dataNasc: Date;
}

const empregados: empregado[] = [{
    nome: 'Edney',
    sobrenome: 'Moita',
    dataNasc: new Date()
}, {
    nome: 'Gray',
    sobrenome: 'Moita',
    dataNasc: new Date()
}];

function tratarEmpregados(emprgs: empregado[]){
    for (let emprg of emprgs){
        console.log('Nome do empregado: ', emprg.nome);
    }
}

let altura: number | null = 1.6; // explicitamente precisa dizer null
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // operador ? para campos opcionais
}

const contato: Contato = {
    nome: 'Edney',
    telefone1: '9999999'
}

// Type Assertion
const minhaIdade: any = 23;
// (minhaIdade as number).toString();
(<number>minhaIdade).toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);