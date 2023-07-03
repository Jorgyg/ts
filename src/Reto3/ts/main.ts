let electrodomesticos: Electrodoméstico[] = new Array(10);

electrodomesticos[0] = new Electrodoméstico(200, 'base1', 'blanco', 'A', 10);
electrodomesticos[1] = new Lavadora(400, 'base2', 'negro', 'B', 15, 8);
electrodomesticos[2] = new Televisión(600, 'base3', 'rojo', 'C', 20, 32, true);
electrodomesticos[3] = new Electrodoméstico(300, 'base4', 'azul', 'D', 12);
electrodomesticos[4] = new Televisión(800, 'base5', 'gris', 'E', 28, 42, false);
electrodomesticos[5] = new Lavadora(500, 'base6', 'negro', 'F', 18, 6);
electrodomesticos[6] = new Electrodoméstico(250, 'base7', 'blanco', 'A', 9);
electrodomesticos[7] = new Lavadora(350, 'base8', 'gris', 'B', 16, 7);
electrodomesticos[8] = new Televisión(700, 'base9', 'rojo', 'C', 22, 36, true);
electrodomesticos[9] = new Electrodoméstico(400, 'base10', 'azul', 'D', 14);

let numE = 0;
let numL = 0;
let numT = 0;

for (let i = 0; i < electrodomesticos.length; i++) {
    let precioFinal = electrodomesticos[i].precioFinal();

    if (electrodomesticos[i] instanceof Lavadora) {
        numL += precioFinal;
    } else if (electrodomesticos[i] instanceof Televisión) {
        numT += precioFinal;
    }
    numE += precioFinal;
}

console.log('Precio total de Electrodomésticos: ' + numE);
console.log('Precio total de Lavadoras: ' + numL);
console.log('Precio total de Televisores: ' + numT);