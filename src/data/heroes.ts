export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

export type Owner = 'DC' | 'Marvel'; //CON ESTO PUEDO CREAR MIS PROPIOS TIPOS PRA DESPUES PONERLOS EN LAS INTERFACES

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

export const owners = ['DC', 'Marvel'] as const;

export default heroes;
