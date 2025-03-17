const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

const numberArray2 = [...numberArray];
numberArray2.push(7);

console.log({ numberArray });
console.log({ numberArray2 });

//importante evitar hacer codigo que muta para esto tenemos que usar los 3 punticos o el spredd = [...array]

export {};
