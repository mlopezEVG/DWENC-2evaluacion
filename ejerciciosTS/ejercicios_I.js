"use strict";
//Modo observador-> tsc nombrearchivo.ts -w 
//Modo observador (de todos los archivos) -> tsc -w -> 
//EJERCICIO 1 | VARIABLES y CONSTANTES
let nombre;
nombre = "Miguelo";
console.log('Nombre: ' + nombre);
let edad;
edad = 30;
console.log('Edad: ' + edad);
let PERSONAJE = {
    nombre: nombre,
    edad: edad
};
;
let spiderman = {
    nombre: "Peter Parker",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
//EJERCICIO 3 | CLASES - "Clase Rombo que calcula el área"
class Rombo {
    //---Constructor al que le pasamos los valores---
    constructor(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalVertical = DiagonalVertical;
        this.DiagonalHorizontal = DiagonalHorizontal;
    }
    //---Metodo que calcula el área y devuelve un número---
    calcularArea() {
        let area;
        area = this.DiagonalVertical * this.DiagonalHorizontal;
        return area;
    }
}
let Rombo1 = new Rombo(2, 8); //Instancia de "Rombo"
let areaRombo1 = Rombo1.calcularArea();
console.log('El área del rombo es: ' + areaRombo1);
//EJERCICIO 4 | FUNCIONES de FLECHA
//--Funciones de Flecha
function sumar(a, b) {
    return a + b;
}
console.log('Función flecha :' + sumar(2, 4)); //6
//--Si solo tiene una instrucción puede omitirse el "return" y las llaves"{}"
const suma = (a, b) => a + b;
console.log('Función flecha concisa: ' + suma(2, 4)); //6
