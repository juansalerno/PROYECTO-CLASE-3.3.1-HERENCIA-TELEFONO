export default class Telefono {
    protected estaPrendido: boolean;
    protected bateriaActual: number;
    protected numeroLlamadasRealizadas: number;
    protected numeroMensajesRealizados: number;

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.numeroLlamadasRealizadas = 0;
        this.numeroMensajesRealizados = 0;
    }

    public mandarMensaje(): void {
        this.numeroMensajesRealizados += 1;
        console.log('Mensaje enviado')
    }

    public hacerLlamada(): void {
        this.numeroLlamadasRealizadas += 1;
        console.log('Llamada realizada.');


    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log('Se ha apagado el telefono');
        }

        else {
            this.estaPrendido = true;
            console.log('Se ha prendido el telefono');
        }
    }

    public gastarBateria(cantidad: number): void {
        this.bateriaActual -= cantidad;
        console.log('Se ha gastado la bateria en la siguiente cantidad: '+ cantidad);
        
    }

    public cargarBateria(cantidad: number): void {
        this.bateriaActual += cantidad;
        console.log('Se ha cargado la bateria en la siguiente cantidad: '+ cantidad);
    }

    public getBateriaStatus(): number {
        return this.bateriaActual;
    }

    public getNumeroLlamadasRealizadas(): number {
        return this.numeroLlamadasRealizadas;
    }

    public getNumeroMensajesRealizados(): number {
        return this.numeroMensajesRealizados;
    }
}