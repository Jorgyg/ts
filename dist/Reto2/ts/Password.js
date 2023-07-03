"use strict";
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.contraseña = this.genPass(longitud);
    }
    genPass(longitud) {
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseña = '';
        for (let i = 0; i < longitud; i++) {
            let indice = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres.charAt(indice);
        }
        return contraseña;
    }
}
