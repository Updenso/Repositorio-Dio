class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;  
    } 
        calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
            return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
        }
}

const Palio = new carro ('fiat','branco',1/11);
console.log(Palio.calcularGastoDePercurso(120, 5));

const Uno = new carro ('fiat','preta',1/10);
console.log(Uno.calcularGastoDePercurso(70,5));