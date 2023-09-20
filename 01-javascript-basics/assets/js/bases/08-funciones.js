
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

//mejor al ser constante
const saludar2 = function( nombre ) {  //devuelen undefined por defecto
    console.log('Hola ' + nombre );
}

//mejor, se puede hacer en 1 linea, son mas eficientes y evitan problemas con this
const saludarFlecha = () => { 
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola Flecha ' + nombre );
}


//recibe todos los argumentos, pero no usa todos, no da error
const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' ); // 1

saludar2( 'Fernando' );

saludarFlecha();
saludarFlecha2('Melissa');

function sumar( a, b ) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }
const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(  getAleatorio2()   );
