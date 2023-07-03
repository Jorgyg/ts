"use strict";
const cargaD = 5;
class Lavadora extends Electrodoméstico {
    constructor(precio, base, color, consumo_energético = consumoD, peso, carga) {
        super(precio, base, color, consumo_energético, peso);
        if (carga == undefined) {
            this.carga = cargaD;
        }
        else {
            this.carga = carga;
        }
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        if (this.carga > 30) {
            precioFinal += 50;
        }
        return precioFinal;
    }
}
