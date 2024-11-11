const prompt = require(`prompt-sync`)()

// Crie um array numeros com os valores [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Faça um algoritmo 
// que some todos os elementos e exiba o resultado no console.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarNumeros(array) {   let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

let resultado = somarNumeros(numeros);

console.log(`A soma dos números é: ${resultado}`);
