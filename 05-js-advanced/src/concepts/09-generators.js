
/**
 * 
 * @param {HTMLDivElement} element 
 */
 export const generatorFunctionsComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() ); //! undefined

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Clicks: ${ value }`;
    }

    button.addEventListener('click', renderButton );
}


function* idGenerator() {
    let currentId = 0;
    while(true) { //! Siempre devuelve un ID
        yield ++currentId; //! Primero incrementa y luego devuelve el ID
    }
}



function* myFirstGeneratorFunction() { //* Retorna 3 valores

    yield 'Primer valor'; //* Devuelve este valor y se pausa, hasta que se pida el siguiente
    yield 'Segundo valor';
    
    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';
}




