interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Hero = {
  name: 'tony',
  age: 45,
  codeName: 'ironman',
  //   power:'money'
};

// EJEMPLO DE DESESTRUCTURACION
// const { age, name, power = ' no tiene poder ' } = person; //puede ser un objeto o un arreglo
// console.log(age, name, power);

const createHero = (arg: Hero) => ({
  id: 123456,
  name: arg.name,
  age: arg.age,
  codeName: arg.codeName,
  power: arg.power ?? 'no tiene poder',
});

console.log(createHero(person));
