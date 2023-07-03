const resolucionD = 20;
const is4kD = false;

class Televisión extends Electrodoméstico {
    private resolucion: number;
    private is4k: boolean;

    constructor(precio: number, base: string, color: string, consumo_energético: string = consumoD, peso: number,
                resolucion: number = resolucionD, is4k: boolean = is4kD) {
        super(precio, base, color, consumo_energético, peso);
        this.resolucion = resolucion;
        this.is4k = is4k;
        if(resolucion == undefined){
            this.resolucion = resolucionD;
        } else {
            this.resolucion = resolucion;
        }
        if(is4kD == undefined){
            this.is4k = is4kD;
        } else {
            this.is4k = is4k;
        }
    }

    public getResolucion(): number {
        return this.resolucion;
    }

    public is4K(): boolean {
        return this.is4k;
    }

    public precioFinal(): number {
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