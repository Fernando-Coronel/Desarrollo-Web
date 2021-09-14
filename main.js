//Funcion dentro de una variable
console.log("\nFunciones")
const cuadrado = function(n) {
    console.log(n * n);
    return n * n;
}
cuadrado(4);

//funcion declarada de la palabra reservada
function cubo (x){
    return x * x * x;
}
console.log(cubo(3));

//Funcion declarada de forma de flecha conocida como arrow function
console.log("\nFunciones flecha o arrow function");
const rectangulo = (a) => { return a * a; }
console.log(rectangulo(4)); 

//Ambito global o scope
console.log("\nAmbito global o scope");
let n1 = 10;//Ambito global

function suma (n1, n2){
    //Ambito local
    return n1 + n2;
}
console.log(suma(1, 3));

//Arreglos o arrays
console.log("\nArreglos o arrays");
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);
console.log(numeros.length);//length (longitud) sirve para ver la longitud de un array
console.log(numeros[2]);

//loop o ciclo while
console.log("\nloop while");
let num = 1;

while(num <= 10){
    console.log(num * 10);
    num++;
}

//loop o ciclo for
console.log("\nloop for");
for(let numerito = 1; numerito <= 10; numerito++){
    console.log(numerito * 10);
}

//objetos u objets
console.log("\nbjetos u objet")
let programador = {
    nombre: "Fernando",
    puesto: "Front-end",
    lenguajes: ["Javascript", "PHP", "Python"],
    frameworks: "React",
    Tiempo: 8 + " "+ "meses"
}

console.log(programador);
console.log(programador.lenguajes[0]);
console.log(programador.lenguajes[1]);
console.log(programador.lenguajes[2]);
console.log(programador.nombre);
console.log(programador.puesto);


//operadores logicos
console.log("\nOperadores Logicos");
let variable1 = false;
let variable2 = true;

let resultado = variable1&&variable2;//operador and

console.log(resultado);

let resultado2 = variable1||variable2;//operador or
console.log(resultado2);

let resultado3 = variable1!=variable2;//operador not
console.log(resultado3)

//arreglos(map)
console.log("\nArreglos (MAP)");
var arreglo = ["plátano", "fresa", "lima", "manzana"];
 var resultado4 = arreglo.map(function (elemento){return elemento + " modificado!"});
 console.log(resultado4);

//Control de flujo IF
console.log("\nControl de flujo IF");
let respuesta5 = 6;

if(respuesta5 >= 5){
    console.log("Promedio Excelente");
}

//Control de flujo IF-ELSE
console.log("\nControl de flujo IF-ELSE");
let respuesta6 = 5;

if(respuesta6 >= 5){
    console.log("Numero Excelente");
    if(respuesta6 == 6){
        console.log("EL numero es igual a 6");
    }else{
        console.log("EL numero no es igual a 6");
    }
}else{
    console.log("Numero Malo");
}

//Control de flujo IF-ELSE
console.log("\nIF-ELSE anidado");
let calificacion = 50;
let calificacionLetra = '';

if( calificacion >= 90){
    calificacionLetra = 'A';
}
else if (calificacion >= 80){
    calificacionLetra = 'B';
}
else if(calificacion >= 70){
    calificacionLetra = 'C';
}
else if(calificacion >= 60){
    calificacionLetra = 'D'
}
else{
    calificacionLetra = 'F';
}

console.log(calificacion + ' ' + 'Es igual a: ' + calificacionLetra);

//switch vs IF-ELSE

console.log("\nmetodo Switch");

let respuesta7 = 4;

switch (respuesta7) {
    case 1:
        console.log("Escribiste el numero 1");
        break;
    case 2:
        console.log("Escribiste el numero 2");
        break;
    case 3:
        console.log("Escribiste el numero 3");
        break;    
    default:
        console.log("Escribiste un numero fuera de rango");
        break;
}

//Ciclo FOR
console.log("\nCiclo FOR");

for (let i = 0; i < 11; i++) {
    console.log("Ciclo FOR impreso: " +  i  + " " + "veces");
    
}
//Ciclo For ejemplo con tablas de multiplicar
let base = 10;
let limite = 10;

for (let i = 1; i<= limite; i++){
    
    let resultado = base * i;
    
    console.log('10 x ' + i + ' = ' + resultado);
}

//Ciclo WHILE
console.log("\nCiclo WHILE");

let k = 0;

while (k < 11) {
    console.log("Ciclo While impreso: " + k + " " + "veces");
    k++;
}

//Ciclo DO-WHILE
console.log("\nCiclo DO_WHILE");
let l = 0;
do {
    l++
    console.log("Ciclo DO-While impreso: " + l + " " + "veces");
} while (l<10);

//Arrays o arreglos
console.log("\nArrays o arreglos");

let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
console.log(dias);
//Se utiliza para imprimir pantalla de los arrays o arreglos
for (let index = 0; index < 7; index++) {
    console.log(dias[index]);    
}

//Funciones para cadenas o strings
console.log("\nFunciones para cadenas o strings");

let cadena = "FernandoCoronel";
console.log("La longitud de la cadena es: " + cadena.length);
console.log("Mayusculas: " + " " + cadena.toLocaleUpperCase());
console.log("Minusculas: " + " " + cadena.toLowerCase());
console.log("La posicion 5 es: " + " " + cadena.charAt(5));

//Funciones para cadenas o strings
console.log("\nFunciones para Arrays o arreglos");

let Frutas = ["Guayaba", "Platano", "Manzana"];
let Verduras = ["Aguacate", "Cebolla", "Jitomate"];
let grupoCompleto, grupoNuevo, grupoInverso;

//Concat(concatena o une los elemento de los array's)
grupoCompleto = Frutas.concat(Verduras);
console.log(grupoCompleto);  

//Join(separa los elementos del array)
grupoNuevo = grupoCompleto.join("<->");
console.log(grupoNuevo);

//pop(elimina un elemento del array)
grupoCompleto.pop();
console.log(grupoCompleto);

//push(agrega un elemento del array)
grupoCompleto.push("Tomate");
console.log(grupoCompleto);

//shift(quita un elemento del array del principio)
grupoCompleto.shift();
console.log(grupoCompleto);

//unshift(agrega un elemento del array del principio)
grupoCompleto.unshift("Melon");
console.log(grupoCompleto);

//reverse(Invierte o los pone al reves todos los elementos del array)
grupoInverso = grupoCompleto.reverse();
console.log(grupoInverso);

//Funciones
console.log("\nFunciones");

let a=1, b=4, c=5, d=6, e=3, f=5;
let suma1;

//asi se aplicaria sin funciones
console.log("asi se aplicaria sin funciones");
suma1 = a + b;
console.log(suma1);

suma1 = c + d;
console.log(suma1);

suma1 = e + f;
console.log(suma1);

//asi se aplicaria con funciones
console.log("asi se aplicaria con funciones");
sumarNumeros(a,b);
sumarNumeros(c,d);
sumarNumeros(e,f);
function sumarNumeros(numero1,numero2){
    let sumaTotal = numero1 + numero2;
    console.log(sumaTotal);

}





































