const cargaD = 5;
class Lavadora extends Electrodoméstico {
    private carga: number;

    constructor(precio: number, base: string, color: string, consumo_energético: string = consumoD, peso: number, carga: number) {
        super(precio, base, color, consumo_energético, peso);
        if(carga == undefined){
            this.carga = cargaD;
        } else {
            this.carga = carga;
        }
    }

    public getCarga(): number {
        return this.carga;
    }

    public precioFinal(): number {
        let precioFinal = super.precioFinal(); 

        if (this.carga > 30) {
            precioFinal += 50;
        }

        return precioFinal;
    }
}