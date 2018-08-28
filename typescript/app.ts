import {Car,Transporte} from "./car";
import {TurboCar} from "./turboCar";


let ship = new Car("Gol quadrado");
ship.drive();



let possante = new TurboCar("A3");
possante.drive();

let eCarroPasseio = (carro:Transporte) => carro.seat > 2;

console.log(`Carro turbo é bom para passeio ? ${eCarroPasseio(possante) ? "Sim" : "Não"}`)