"use strict";
const resolucionD = 20;
const is4kD = false;
class Televisión extends Electrodoméstico {
    constructor(precio, base, color, consumo_energético = consumoD, peso, resolucion = resolucionD, is4k = is4kD) {
        super(precio, base, color, consumo_energético, peso);
        this.resolucion = resolucion;
        this.is4k = is4k;
        if (resolucion == undefined) {
            this.resolucion = resolucionD;
        }
        else {
            this.resolucion = resolucion;
        }
        if (is4kD == undefined) {
            this.is4k = is4kD;
        }
        else {
            this.is4k = is4k;
        }
    }
    getResolucion() {
        return this.resolucion;
    }
    is4K() {
        return this.is4k;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        if (this.resolucion > 40) {
            precioFinal += precioFinal * 0.3;
        }
        if (this.is4k) {
            precioFinal += 50;
        }
        return precioFinal;
    }
}
