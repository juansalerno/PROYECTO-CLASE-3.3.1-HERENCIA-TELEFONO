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
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.fotosTomadas = 0;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.fotosTomadas += 1;
        console.log('Foto tomada.');
    };
    TelefonoConCamara.prototype.eliminarFoto = function () {
        this.fotosTomadas -= 1;
        console.log('Foto eliminada');
    };
    TelefonoConCamara.prototype.getCantidadFotosTomadas = function () {
        return this.fotosTomadas;
    };
    return TelefonoConCamara;
}(Telefono_1["default"]));
exports["default"] = TelefonoConCamara;
