"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 98;
        return _this;
    }
    TelefonoConRadio.prototype.subirFrecuencia = function () {
        this.frecuenciaActual += 1;
        console.log('Se ha subido la frecuencia en 1 unidad');
    };
    TelefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual -= 1;
        console.log('Se ha bajado la frecuencia en 1 unidad');
    };
    TelefonoConRadio.prototype.elegirFrecuencia = function (numero) {
        this.frecuenciaActual = numero;
        console.log('Se ha elegido la siguiente freciencia: ' + numero);
    };
    TelefonoConRadio.prototype.getFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        console.log(this.frecuenciaActual);
    };
    return TelefonoConRadio;
}(Telefono_1["default"]));
exports["default"] = TelefonoConRadio;
