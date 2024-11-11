const prompt = require(`prompt-sync`)()

// Crie um array valores com os números [2, 4, 6, 8, 10]. Multiplique cada elemento por 
// 2 e exiba o novo array no console.

let valores = [2, 4, 6, 8, 10];

function multiplicarPorDois(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push(array[i] * 2);
    }
    return novoArray;
}

let resultado = multiplicarPorDois(valores);

console.log(`Novo array com valores multiplicados por 2: ${resultado}`);
