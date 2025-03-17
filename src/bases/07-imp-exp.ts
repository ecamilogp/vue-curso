import heroes, { type Owner } from '../data/heroes';

export const getHeroById = (id: number) => {
  return heroes.find((h) => h.id === id);
};

export const getHeroesByOwner = (owner: Owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwner('Marvel'));
