// console.log('inicio');

import type { Hero } from '../data/heroes';
import { getHeroById } from './07-imp-exp';

// new Promise((resolve, reject) => {
//   //   console.log('cuerpo de la promesa');
//   setTimeout(() => {
//     // resolve('mi amigo cumplio');
//     // return
//     reject('mi amigo no cumplio');
//   }, 1000);
// })
//   .then((message) => console.log(message))
//   .catch((errormessage) => console.log(errormessage))
//   .finally(() => console.log('fin de la promesa'));
// //es importante el diferenciar el uso de cath y del then tambien el uso del resolve y reject

// console.log('fin');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject('heroe no encontrado');

      //   if (hero) {
      //     resolve(hero);
      //     return;
      //   }

      //   reject(`heroe no encontrado #${id} `);
    }, 1500);
  });
};

getHeroByIdAsync(1)
  .then((hero) => console.log('el nombre es ', hero.name))
  .catch((message) => alert(message));
