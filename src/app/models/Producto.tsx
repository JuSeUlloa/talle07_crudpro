import { Categoria } from "./Categoria";

export class Producto {

    public codProducto: number;
    public nombreProducto: string;
    public categoriaProducto: Categoria;
    public valorProducto: number;
    public fechaVencimientoProducto: Date;
    public fotoProducto: string;
    public base64Producto: string;
    public codCategoria?:number;


    constructor(cod: number, nom: string, cat: Categoria, val: number, fech: Date, foto: string, base: string) {
        this.codProducto = cod;
        this.nombreProducto = nom;
        this.categoriaProducto = cat;
        this.valorProducto = val;
        this.fechaVencimientoProducto = fech;
        this.fotoProducto = foto;
        this.base64Producto = base;
    }


}