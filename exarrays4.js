const prompt = require(`prompt-sync`)()

// Crie um array cores com 5 elementos: "vermelho", "azul", "verde", "amarelo", 
// "preto". Crie um algoritmo que retorne o índice da cor "verde".

const cores = [
    "vermelho", // 0
    "azul", // 1
    "verde", // 2
    "amarelo", // 3
    "preto" // 4
];

let indice = -1;

for (let i = 0; i < cores.length; i++) {
    if (cores[i] === "verde") {
        indice = i
        break
    }
}
