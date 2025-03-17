// MANERA 1 DE HACER UNA FUNCION
// function greetPerson(name: string) {
//   return `hola, ${name}`;
// }

// MANERA 2 DE HACER UNA FUNCION
// const greetPerson = (name: string) => {
//   return `hola, ${name}`;
// };

// // MANERA 3 DE HACER UNA FUNCION
// const greetPerson = (name: string) => `hola, ${name}`;

// console.log(greetPerson('camilo'));

const getUser = (uid: string) => ({
  uid: uid,
  userName: 'tony001',
});

console.log(getUser('XYZ-123'));

const heroes = [
  {
    id: 1,
    name: 'batman',
  },
  {
    id: 2,
    name: 'superman',
    power: 'super fuerza',
  },
];

const hero = heroes.find((h) => h.id === 1);

console.log(hero?.name);
