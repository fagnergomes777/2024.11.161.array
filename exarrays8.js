const prompt = require(`prompt-sync`)()

// Crie um array idades com os valores [15, 20, 18, 22, 25, 20, 18, 22]. Faça um algoritmo 
// que conte quantas vezes o número 18 aparece no array

let idades = [15, 20, 18, 22, 25, 20, 18, 22];

function contarIdadeDezoito(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 18) {
            contador++;
        }
    }
    return contador;
}

let totalDezoito = contarIdadeDezoito(idades);

console.log(`O número 18 aparece ${totalDezoito} vezes no array.`);
