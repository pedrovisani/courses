let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC)

/* or

[varA, varB, varC] = [varB, varC, varA]

*/