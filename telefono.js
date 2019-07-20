"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.numeroLlamadasRealizadas = 0;
        this.numeroMensajesRealizados = 0;
    }
    Telefono.prototype.mandarMensaje = function () {
        this.numeroMensajesRealizados += 1;
        console.log('Mensaje enviado');
    };
    Telefono.prototype.hacerLlamada = function () {
        this.numeroLlamadasRealizadas += 1;
        console.log('Llamada realizada.');
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log('Se ha apagado el telefono');
        }
        else {
            this.estaPrendido = true;
            console.log('Se ha prendido el telefono');
        }
    };
    Telefono.prototype.gastarBateria = function (cantidad) {
        this.bateriaActual -= cantidad;
        console.log('Se ha gastado la bateria en la siguiente cantidad: ' + cantidad);
    };
    Telefono.prototype.cargarBateria = function (cantidad) {
        this.bateriaActual += cantidad;
        console.log('Se ha cargado la bateria en la siguiente cantidad: ' + cantidad);
    };
    Telefono.prototype.getBateriaStatus = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.getNumeroLlamadasRealizadas = function () {
        return this.numeroLlamadasRealizadas;
    };
    Telefono.prototype.getNumeroMensajesRealizados = function () {
        return this.numeroMensajesRealizados;
    };
    return Telefono;
}());
exports["default"] = Telefono;
