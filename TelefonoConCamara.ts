import Telefono from './Telefono';

export default class TelefonoConCamara extends Telefono {
    private fotosTomadas: number;


    public constructor() {
        super();
        this.fotosTomadas = 0;
    }

    public sacarFoto(): void {
        this.fotosTomadas += 1;
        console.log('Foto tomada.');
    }
    public eliminarFoto(): void {
        this.fotosTomadas -= 1;
        console.log('Foto eliminada');
    }

    public getCantidadFotosTomadas(): number {
        return this.fotosTomadas;
    }

}
