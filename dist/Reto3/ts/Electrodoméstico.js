"use strict";
const colorD = 'blanco';
const consumoD = 'F';
const precioD = 100;
const pesoD = 5;
class Electrodoméstico {
    constructor(precio, base, color, consumo_energético = consumoD, peso) {
        if (precio == undefined) {
            this.precio = precioD;
        }
        else {
            this.precio = precio;
        }
        if (color == undefined) {
            this.color = colorD;
        }
        else {
            this.color = color;
        }
        if (consumo_energético == undefined) {
            this.consumo_energético = consumoD;
        }
        else {
            this.consumo_energético = consumo_energético;
        }
        if (peso == undefined) {
            this.peso = pesoD;
        }
        else {
            this.peso = peso;
        }
        this.base = base;
    }
    getPrecio() {
        return this.precio;
    }
    getBase() {
        return this.base;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumo_energético;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] == letra) {
                return letra;
            }
        }
        return consumoD;
    }
    comprobarColor(color) {
        let colors = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        for (let i = 0; i < colors.length; i++) {
            if (colors[i] == color) {
                return color;
            }
        }
        return colorD;
    }
    precioFinal() {
        let precioFinal = this.precio;
        switch (this.consumo_energético) {
            case 'A':
                precioFinal += 100;
                break;
            case 'B':
                precioFinal += 80;
                break;
            case 'C':
                precioFinal += 60;
                break;
            case 'D':
                precioFinal += 50;
                break;
            case 'E':
                precioFinal += 30;
                break;
            case 'F':
                precioFinal += 10;
                break;
        }
        if (this.consumo_energético = "A") {
            precioFinal += 100;
        }
        else if (this.consumo_energético = "B") {
            precioFinal += 80;
        }
        else if (this.consumo_energético = "C") {
            precioFinal += 60;
        }
        else if (this.consumo_energético = "D") {
            precioFinal += 50;
        }
        else if (this.consumo_energético = "E") {
            precioFinal += 30;
        }
        else {
            precioFinal += 10;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            precioFinal += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precioFinal += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precioFinal += 80;
        }
        else {
            precioFinal += 100;
        }
        return precioFinal;
    }
}
