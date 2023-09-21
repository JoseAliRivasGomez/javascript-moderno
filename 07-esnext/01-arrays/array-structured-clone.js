const superHeroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman'
  },
  {
    id: 3,
    name: 'Flash'
  },
  {
    id: 4,
    name: 'Aquaman'
  },
];

//! Pasa los objetos por referencia, solo crea un arreglo totalmente nuevo si tiene datos primitivos
const superHeroesCopy1 = [...superHeroes];

//* Crea clone de arreglo, no pasa los objetos por referencia
const superHeroesCopy = structuredClone(superHeroes);
superHeroesCopy[0].name = 'Green Lantern'; //* Solo cambia el segundo arreglo


console.table( superHeroes );
console.table( superHeroesCopy );