const person = {
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'new york',
    zip: 82092382,
    lat: 213392,
    lng: 73983032,
  },
}; //as const;

const person2 = structuredClone(person); //esto es muy importante para hacer clones de objetos

person2.lastName = 'parker';

console.log(person);
console.log(person2);
