let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const a = varA;
const b = varB;
const c = varC;

varA = b;
varB = c;
varC = a;

console.log(varA, varB, varC);