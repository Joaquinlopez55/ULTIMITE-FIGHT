


let numero1 = 5
let numero2 = 10

function suma (){
    let resultado = numero1 + numero2
    console.log (resultado)
}
console.log ("Antes de la funcion")
suma()
console.log ("Despues de la funcion")


console.log ("------------------------")

function mtsCuadrados (largo, ancho)
{
    let metros = largo * ancho;
    console.log (metros)
}

mtsCuadrados (10,5)
mtsCuadrados (0,3)
mtsCuadrados (20,2)

let largo = 10;
let ancho = 15;

mtsCuadrados (largo,ancho)



console.log ("------------------------")

const radius = 10;
const pi2 = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi2 * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi2));

console.log ("------------------------")

let pi = 3.14
let radio = 10

function areacirculo (pi, radio){
    let areacirculo = pi * (radio**2);
    console.log (areacirculo)
}

areacirculo (pi,150)

console.log ("------------------------")

let edad =20;

function esMayor (edad)
{
    const edadLegal = 18;
    if(edad >= edadLegal){
        console.log("edad mayor")
    } else if (edad > 100) {
        console.log ("usted es grande")
    } else if (edad < 0){
        console.log ("es peqño")
    } else {
        console.log ("es menor")
    }
}

esMayor (edad);
esMayor (17);
esMayor (0);
esMayor(-10)
esMayor (100);
esMayor (18);
