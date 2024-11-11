// crie um algoritimo que receba 10 numeros do usuario
// e imprima de tras para frente

const prompt = require('prompt-sync')()

let numeros = new Array(10)

// recebendo os numeros
for (let i = 0; i < numeros.length; i++) {
    let numero = parseInt(prompt(`Informe o ${i+1}º número: `))
    numeros[i] = numero
}

// imprimindo os elementos de tras para frente
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Número ${i+1}: ${numeros[i]}`)
}
