// Todo esto le pertenece a window, por eso no funciona en Node

// alert('Hola Mundo');

let nombre = prompt('¿Cuál es tu nombre?', 'Jose');
console.log( nombre );
console.log( '****' + nombre + '****' );

const seleccion = confirm('¿Está seguro de borrar esto?');
console.log( seleccion );

// console.log( global ); // Esto si funciona en Node, en browsers no

