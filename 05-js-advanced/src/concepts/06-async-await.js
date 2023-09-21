import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => { //! Debe ser async para poder usar await

    const id1 = '5d86371f2343e37870b91ef13';
    const id2 = '5d86371f25a058e5b1c8a65e';

    try {
        //! Van en orden, una despues de otra, mas lento, se puede optimizar
        // const hero1 = await findHero( id1 );
        // const hero2 = await findHero( id2 );

        //* Van en desorden, mas rapido porque inician al mismo tiempo, se puede porque la segunda no depende la primera
        const [hero1, hero2 ] = await Promise.all([
            findHero( id1 ),
            findHero( id2 ),
        ]);
    
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
        
    } catch (error) { //! Si alguna de las 2 da error, imprime el error
        element.innerHTML = error;
    }


}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => { //* Solo con poner async devuelve una promesa (que resuelve un string en este caso)

    const hero = heroes.find( hero => hero.id === id );

    if ( !hero )
        throw `Hero with id ${ id } not found`; //! throw => reject

    return hero; //* return => resolve

}
