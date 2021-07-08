class Data{
    dia: number;
    mes: number;
    ano: number;

    constructor (dia: number, mes: number, ano: number = 2021){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

class Data2{
    constructor (public dia: number, public mes: number, public ano: number = 2021){
    }
}

const data = new Data(7, 7, 2021);
const data2 = new Data(7, 7);
console.log(data.dia);
console.log(data.mes);


class Carro{
    
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

    private alterarVelocidade(variacao: number){
        if (this.velocidadeAtual + variacao >= 0 && this.velocidadeAtual + variacao <= this.velocidadeMaxima){
            this.velocidadeAtual += variacao;
        }
    }

    acelerar(){
        const aceleracao = 5;
        this.alterarVelocidade(aceleracao);
    }
    frear(){
        const frenagem = -5;
        this.alterarVelocidade(frenagem);
    }
}


const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
carro.frear();

// Herança
class Camaro extends Carro{

    private turbo: boolean = false;

    constructor(){
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();