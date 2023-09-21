const heroes = ['Batman','Superman','Flash','Aquaman',];

const heroesCopy = heroes;

// const deletedHeroes = heroes.splice(0, 2, 'Green Lantern'); //! Modifica el arreglo y sus referencias (heroesCopy), regresa elementos eliminados
const deletedHeroes = heroes.toSpliced(0, 2, 'Green Lantern') //* Copia por valor, eliminar los primeros 2 y agrega 'Green Lantern' en su lugar, regresa el nuevo arreglo

// heroes.sort(); //! Modifica el arreglo y sus referencias (heroesCopy)
const sortedHeroes = heroes.toSorted(); //* Copia por valor ordenada

// heroes.reverse(); //! Modifica el arreglo y sus referencias (heroesCopy)
const reversedHeroes = heroes.toReversed(); //* Copia por valor ordenada revertida


console.table(heroes);
console.table(deletedHeroes);
console.table(sortedHeroes);
console.table(reversedHeroes);