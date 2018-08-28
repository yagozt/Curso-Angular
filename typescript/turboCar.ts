import {Car} from "./car";

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

export {TurboCar}