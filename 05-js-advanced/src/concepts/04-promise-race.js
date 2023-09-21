
/**
 * 
 * @param {HTMLDivElement} element 
 */
 export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    //! Cuando solo se quiere el resultado (o error) de la promesa mas rapida (el primer resolve o reject que se ejecute)
    //! Para usar el server mas rapido
    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]).then( renderValue );
    
}


const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Slow Promise') ;
    }, 2000 );
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Medium Promise') ;
    }, 1500 );
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Fast Promise') ;
    }, 1000 );
});


