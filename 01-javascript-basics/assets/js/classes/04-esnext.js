

class Rectangulo {

    #area = 0; //! Privada, bastante nuevo en JavaScript

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#calgularArea();
    }

    #calgularArea() { //! Privado, bastante nuevo en JavaScript
        this.#area = this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100; //! Nope
// rectangulo.#calgularArea(); //! Nope

console.log(rectangulo);



