const prompt = require(`prompt-sync`)()

// Crie dois arrays: array1 com os elementos [1, 2, 3] e array2 com os elementos [4, 5, 
// 6]. Concatene os dois arrays e exiba o resultado no console.

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let arrayConcatenado = array1.concat(array2);

// console.log(`Array concatenado: ${arrayConcatenado}`);


// Crie dois arrays: array1 com os elementos [1, 2, 3] e array2 com os elementos [4, 5, 
// 6]. Concatene os dois arrays e exiba o resultado no console.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const tamanhoArray1 = array1.length;
const tamanhoArray2 = array2.length;

const tamanhoArrayConcatenado = tamanhoArray1 + tamanhoArray2;

const arrayConcatenado = new Array(tamanhoArrayConcatenado);

for (let i = 0; i < tamanhoArray1; i++) {
    arrayConcatenado[i] = array1[i];
}

for (let i = 0; i < tamanhoArray2; i++) {
    arrayConcatenado[i + tamanhoArray1] = array2[i]
}

console.log(arrayConcatenado)