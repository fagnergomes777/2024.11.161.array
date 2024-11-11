const prompt = require(`prompt-sync`)()

// Crie um array nomes com os elementos ["Ana", "Bruno", "Carlos", "Diana"]. Remova 
// o último elemento do array e exiba o resultado no console.

let nomes = ["Ana", "Bruno", "Carlos", "Diana"];

nomes.pop();

console.log(`Array após remover o último elemento: ${nomes}`);
