
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

//Los primitivos se pasan por valor
//Los objetos se pasan por referencia

let juan = { nombre: 'Juan' };
let pedro  = juan; //referencia
let ana  = { ...juan }; //valor
pedro.nombre = 'Pedro';
ana.nombre = 'Ana';

console.log({ juan, pedro, ana });


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice(); //nuevo arreglo, mas lento
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; //nuevo arreglo, mas rapido
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });