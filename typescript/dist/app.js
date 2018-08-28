var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ship = new Car("Gol quadrado");
ship.drive();
var TurboCar = /** @class */ (function (_super) {
    __extends(TurboCar, _super);
    function TurboCar(nome) {
        var _this = _super.call(this, nome) || this;
        _this.nome = nome;
        _this.seat = 1;
        return _this;
    }
    TurboCar.prototype.drive = function () {
        if (Math.random() > 0.5) {
            console.log('Turbo on fire!');
        }
        else {
            _super.prototype.drive.call(this);
        }
    };
    return TurboCar;
}(Car));
var possante = new TurboCar("A3");
possante.drive();
var eCarroPasseio = function (carro) { return carro.seat > 2; };
console.log("Carro turbo \u00E9 bom para passeio ? " + (eCarroPasseio(possante) ? "Sim" : "Não"));
