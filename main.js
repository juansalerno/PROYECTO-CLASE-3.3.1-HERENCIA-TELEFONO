"use strict";
exports.__esModule = true;
var TelefonoConRadio_1 = require("./TelefonoConRadio");
var TelefonoConCamara_1 = require("./TelefonoConCamara");
var miTelefonoConCamara = new TelefonoConCamara_1["default"]();
console.log(miTelefonoConCamara);
miTelefonoConCamara.prenderApagar();
miTelefonoConCamara.gastarBateria(50);
miTelefonoConCamara.hacerLlamada();
miTelefonoConCamara.mandarMensaje();
miTelefonoConCamara.cargarBateria(10);
miTelefonoConCamara.sacarFoto();
miTelefonoConCamara.sacarFoto();
miTelefonoConCamara.eliminarFoto();
miTelefonoConCamara.hacerLlamada();
console.log(miTelefonoConCamara.getBateriaStatus());
console.log(miTelefonoConCamara.getCantidadFotosTomadas());
console.log(miTelefonoConCamara.getNumeroLlamadasRealizadas());
console.log(miTelefonoConCamara.getNumeroMensajesRealizados());
console.log(miTelefonoConCamara);
console.log(' \n');
var miTelefonoConRadio = new TelefonoConRadio_1["default"]();
console.log(miTelefonoConRadio);
miTelefonoConRadio.prenderApagar();
miTelefonoConRadio.gastarBateria(50);
miTelefonoConRadio.hacerLlamada();
miTelefonoConRadio.mandarMensaje();
miTelefonoConRadio.cargarBateria(10);
miTelefonoConRadio.subirFrecuencia();
miTelefonoConRadio.subirFrecuencia();
miTelefonoConRadio.bajarFrecuencia();
miTelefonoConRadio.verFrecuenciaActual();
miTelefonoConRadio.elegirFrecuencia(22.5);
miTelefonoConRadio.hacerLlamada();
console.log(miTelefonoConRadio.getBateriaStatus());
console.log(miTelefonoConRadio.getFrecuenciaActual());
console.log(miTelefonoConRadio.getNumeroLlamadasRealizadas());
console.log(miTelefonoConRadio.getNumeroMensajesRealizados());
console.log(miTelefonoConRadio);
