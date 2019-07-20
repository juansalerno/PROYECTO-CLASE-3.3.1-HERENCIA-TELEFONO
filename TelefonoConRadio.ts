import Telefono from './Telefono';

export default class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;
   
    public constructor() {
        super();
        this.frecuenciaActual = 98
    }

    public subirFrecuencia(): void {
        this.frecuenciaActual += 1;
        console.log('Se ha subido la frecuencia en 1 unidad');
        
    }

    public bajarFrecuencia(): void {
        this.frecuenciaActual -= 1;
        console.log('Se ha bajado la frecuencia en 1 unidad');
    }

    public elegirFrecuencia(numero: number): void {
        this.frecuenciaActual = numero;
        console.log('Se ha elegido la siguiente freciencia: '+ numero);
        
    }

    public getFrecuenciaActual():number {
        return this.frecuenciaActual;
    }

    public verFrecuenciaActual(): void {
        console.log(this.frecuenciaActual);
    }

}