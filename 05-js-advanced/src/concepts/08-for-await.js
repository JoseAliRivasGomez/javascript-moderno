import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f2343e37870b91ef1';
    const heroIds = heroes.map( hero => hero.id ); //* Todos los IDs

    if(await getHeroAsync(id)){ //* Se puede usar el await dentro de if, while y for
        element.innerHTML = 'Si existe el heroe <br/><br/>';
    }

    const heroPromises = getHeroesAsync( heroIds );

    for await( const hero of heroPromises ) { //* Alternativa al Promise.all
        element.innerHTML += `${ hero.name } <br/> `
    }    

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => { //* Devuelve arreglo de promesas
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => { //* Devuelve un heroe

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}