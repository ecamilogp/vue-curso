// DESESTRUCTURACION DE ARRAYS

const character = ['goku', 'vegueta', 'trunks', 'Goten'];

const [g, v, t, g2] = character;

console.log(g, v, t, g2);

const returnArray = () => {
  return [123, 'ABC'] as const; //este as const es muy importante y util para casos de desestructuracion
};

const [numbers, letters] = returnArray();

console.log(letters.toLowerCase(), numbers * 2);
