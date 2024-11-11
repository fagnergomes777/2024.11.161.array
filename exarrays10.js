const prompt = require(`prompt-sync`)()

// Crie um array temperaturas com os valores [23, 19, 25, 21, 20, 18, 22]. Faça um 
// algoritmo que encontre e exiba o menor valor do array

let temperaturas = [23, 19, 25, 21, 20, 18, 22];

function encontrarMenorValor(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

let menorTemperatura = encontrarMenorValor(temperaturas);

console.log(`A menor temperatura é: ${menorTemperatura}`);
