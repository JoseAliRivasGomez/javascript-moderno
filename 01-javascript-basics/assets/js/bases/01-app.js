alert('Hola desde app.js');



console.log('Hola Mundo')

console.log( console.log('Hola Mundo') );

//VAR es basura, se crea en window y puede sobreescribir sus variables. 
//Ademas, no da error si se usan variables antes de inicializarlas. 

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

const saludo =  c + d; //mas ligera

console.log('%c Mis variables', 'color:red; font-weight: bold');
console.info({ a });
console.warn({ b });
console.error({ c });

c = 'Hola de nuevo';

console.table({a, b, c, d, x }); //puede recibir arreglo

let miNuevoNombre = 'Jose Rivas';

//Los breakpoints se pueden hacer VS Code y probar en Run/Start Debugging si esta instalado Node
//Debug console es la consola que se utiliza en el Debugging
//Los breakpoints tambien se pueden hacer en Chrome/Sources/01-app.js