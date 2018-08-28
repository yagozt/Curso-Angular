"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(nome) {
        this.nome = nome;
        this.seat = 3;
    }
    Car.prototype.drive = function () {
        console.log("Driving the " + this.nome);
    };
    return Car;
}());
exports.Car = Car;
