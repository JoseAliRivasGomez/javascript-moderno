

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

while( i < carros.length ) {
    console.log( carros[i] );
    // i = i + 1;
    i++;
}

console.warn('While')
// undefined
// null
// false
while( carros[i] ) { //same as length, devuelve undefined si no hay
    if ( i === 1 ){
        // break; //se sale del bucle
        i++;
        continue; //se salta el resto de codigo de ESTE carro y continua
    }
    
    console.log( carros[i] );
    i++;
}


console.warn('Do While');
let j = 10;

do { //at least once
    console.log( carros[j]);
    j++;
} while( carros[j] );

