"use strict";
const sexoDefault = 'H';
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura) {
        if (nombre == undefined) {
            this.nombre = "";
        }
        else {
            this.nombre = nombre;
        }
        if (edad == undefined) {
            this.edad = 0;
        }
        else {
            this.edad = edad;
        }
        if (dni == undefined) {
            this.dni = "";
        }
        else {
            this.dni = dni;
        }
        if (peso == undefined) {
            this.peso = 0;
        }
        else {
            this.peso = peso;
        }
        if (sexo == undefined) {
            this.sexo = sexoDefault;
        }
        else {
            this.sexo = sexo;
        }
        if (altura == undefined) {
            this.altura = 0;
        }
        else {
            this.altura = altura;
        }
    }
}
