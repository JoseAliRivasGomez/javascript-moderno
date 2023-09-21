const state = [
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


const index = 1;
const newName = 'Green Lantern';

//! Con el spread del hero si crea copias por valor de cada objeto
const newState1 = state.map( (hero, i) => {

  if ( i === index ) {
    hero.name = newName;
  }

  return {...hero};
});

//* Pero, esta opcion es mas simple
const newState = state.with(index, {
  // ...state[index],
  ...state.at(index),
  name: newName
});

state[0].name = 'Volcan Negro';

console.table(newState);


console.log('El último: ', state.at(-1)); //* el penultimo seria -2
