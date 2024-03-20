import { Marca } from "./Marca";

export class Moto {

    public codMoto: number;
    public marcaMoto: Marca;
    public motorMoto: string;
    public modeloMoto: string;
    public fotoMoto: string;
    public base64Moto: string;

    constructor(cod: number, mar: Marca, mot: string, mod: string, foto: string, base: string) {
        this.codMoto = cod;
        this.marcaMoto = mar;
        this.motorMoto=mot;
        this.modeloMoto=mod;
        this.fotoMoto=foto;
        this.base64Moto=base;

    }

}