const sexoDefault = 'H';
class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: 'H' | 'M';
    private peso: number;
    private altura: number;

    constructor(nombre: string, edad: number, dni: string, sexo: 'H' | 'M', peso: number, altura: number ) {
        if(nombre == undefined){
            this.nombre = "";
        } else {
            this.nombre = nombre;
        }
        if(edad == undefined){
            this.edad = 0;
        } else {
            this.edad = edad;
        }
        if(dni == undefined){
            this.dni = "";
        } else {
            this.dni = dni;
        }
        if(peso == undefined){
            this.peso = 0;
        } else {
            this.peso = peso;
        }
        if(sexo == undefined){
            this.sexo = sexoDefault;
        } else {
            this.sexo = sexo;
        }
        if(altura == undefined){
            this.altura = 0;
        } else {
            this.altura = altura;
        }
    }
}