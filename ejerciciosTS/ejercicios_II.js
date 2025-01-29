"use strict";
//----------------EJERCICIOS II--------------------
//-------------EJERCICIO 1: Crear una clase con una variable pública de cada tipo (string, number, boolean, any, Array) 
//                                         un constructor e instanciar un objeto
class Clase {
    constructor(cadena, numero, booleano, cualquiertipo, array) {
        this.cadena = cadena;
        this.numero = numero;
        this.booleano = booleano;
        this.cualquiertipo = cualquiertipo;
        this.array = array;
    }
}
let instancia = new Clase("Hola", 22, false, "jeje", [3, 4, 5]);
console.log("Cadena: " + instancia.cadena);
console.log("Número: " + instancia.numero);
console.log("Booleano: " + instancia.booleano);
console.log("Cualquiertipo: " + instancia.cualquiertipo);
console.log("Array: " + instancia.array);
//---------------EJERCICIO 2: clase para contemplar un rectángulo con dos propiedades:1 → Base, 2 → Altura
//              método que calcule el área (Base*Altura),este método deberá devolver un valor numérico.
class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        let area;
        area = this.base * this.altura;
        return area;
    }
}
let rectangulo1 = new rectangulo(3, 5);
let rectanguloArea = rectangulo1.calcularArea();
console.log('Área del rectángulo: ' + rectanguloArea);
//---------------------EJERCICIO 3: A partir del ejercicio anterior deberá sacar dos clases una clase padre de la cual heredar factores comunes
//una clase para un rectángulo y un triángulo con dos propiedades:1 → Base, 2 → Altura. Deberá tener un método para calcular el área en el rectángulo y en el triángulo.
class figura {
    constructor(basex, alturax) {
        this.base = basex;
        this.altura = alturax;
    }
    mostrarPropiedades() {
        console.log('Base: ' + this.base, 'Altura: ' + this.altura);
    }
}
class Rectangulo extends figura {
    constructor(base, altura) {
        super(base, altura);
    }
    calcularArea() {
        let areaRectangulo = this.base * this.altura;
        return areaRectangulo;
    }
}
class Triangulo extends figura {
    constructor(base, altura) {
        super(base, altura);
    }
    calcularArea() {
        let areaTriangulo = (this.base * this.altura) / 2;
        return areaTriangulo;
    }
}
let rectanguloextiende = new Rectangulo(3, 6);
rectanguloextiende.mostrarPropiedades(); //muestra Base: 3 Altura:6.
console.log('Área del Rectángulo: ' + rectanguloextiende.calcularArea());
let trianguloextiende = new Triangulo(8, 9);
trianguloextiende.mostrarPropiedades(); //muestra Base:8 Altura:9
console.log('Área del Triángulo: ' + trianguloextiende.calcularArea());
//----------------EJERCICIO 4: parámetros obligatorios, opcionales y otros serán por defecto si no le pasamos ninguno.
//edad?: La interrogación muestra que es OPCIONAL
//="valor" da un valor por DEFECTO
function getVillano(nombre, edad, arma = "pistola") {
    var mensaje;
    if (edad) {
        mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene una " + arma;
    }
    return mensaje;
}
;
console.log(getVillano("Miriam")); //Miriam tiene una pistola
console.log(getVillano("Lucía", 22)); //Lucía tiene una edad de 22 y arma de "pistola"
console.log(getVillano("María", 44, "arma")); //María tiene una edad de 44 y arma de "arma"
//------------------------EJERCICIO 5-Convertir las siguientes funciones a funciones flecha
/* function obtenerDoble( a, b ){
        return (a + b) * 2
    }                           */
let obtenerDoble = (a, b) => {
    return (a + b) * 2;
};
console.log('Función Flecha del Doble: ' + obtenerDoble(4, 7));
/*function obtenerTriple( a, b, c ){
    return (a + b +c) * 3
}*/
let obtenertriple = (a, b, c) => {
    return (a + b + c) * 3;
};
console.log('Función Flecha del Triple: ' + obtenertriple(4, 7, 2));
var camaleon = {
    tipo: "reptil",
    peculiaridad: "camuflarse"
};
