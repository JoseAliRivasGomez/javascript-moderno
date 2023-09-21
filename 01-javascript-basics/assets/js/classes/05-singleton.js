

class Singleton { //! Solo se necesita una instancia y global

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
   
        if ( !!Singleton.instancia ) { //! pasa undefined a false
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman'); //! Ironman
const instancia2 = new Singleton('Spiderman'); //! Ironman
const instancia3 = new Singleton('BlackPanther'); //! Ironman


console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`); //! Ironman
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`); //! Ironman
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`); //! Ironman

