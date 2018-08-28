class Car implements Transporte{
    seat: number;
    constructor (public nome: string){
        this.seat = 3;
    }

    drive(){
        console.log(`Driving the ${this.nome}`);
    }
}

let ship = new Car("Gol quadrado");
ship.drive();

class TurboCar extends Car {
    constructor(public nome:string){
        super(nome);
        this.seat = 1;
    }
    drive(){
        if(Math.random() > 0.5){
            console.log('Turbo on fire!');
        }
        else{
            super.drive();
        }
    }
}
interface Transporte{
    seat: number;
}
let possante = new TurboCar("A3");
possante.drive();

let eCarroPasseio = (carro:Transporte) => carro.seat > 2;

console.log(`Carro turbo é bom para passeio ? ${eCarroPasseio(possante) ? "Sim" : "Não"}`)