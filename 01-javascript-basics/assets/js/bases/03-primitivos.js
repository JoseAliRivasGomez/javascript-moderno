
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía May";
nombre = `Tía May`;

console.log( typeof nombre ); //string

nombre = 123;
console.log( typeof nombre ); //number


let esMarvel = false;
console.log( typeof esMarvel ); //boolean


let edad = 33;
console.log( typeof edad ); //number

edad = 33.001;
console.log( typeof edad ); //number


let superPoder;
console.log( typeof superPoder ); // undefined

let soyNull = null;
console.log( typeof soyNull ); // object


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 ); //symbol


console.log( symbol1 === symbol2 ); //false

