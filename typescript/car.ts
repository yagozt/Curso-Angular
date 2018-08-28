class Car implements Transporte{
    seat: number;
    constructor (public nome: string){
        this.seat = 3;
    }

    drive(){
        console.log(`Driving the ${this.nome}`);
    }
}

interface Transporte{
    seat: number;
}

export {Car,Transporte}