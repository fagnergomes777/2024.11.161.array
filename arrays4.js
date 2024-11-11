// crie um algoritimo que receba 04 notas
// calcule a media e informe se o
// aluno está APROVADO ou REPROVADO
// a media é 7,0
const prompt = require('prompt-sync')()

// criando um array vazio chamado notas
let nota = new Array(4)

// criando uma variavel para armazenar a soma das notas
let soma = 0

// recebendo as notas
for (let i = 0; i < 4; i++) {
    const nota = parseFloat(prompt(`Informe a ${i+1}ª nota: `))
    notas [i] = nota
    soma += nota
}

// calculando a media
const media = soma / notas.length

// verificando se o aluno está aprovado ou reprovado
const estahAprovado = media >= 7
if (estahAprovado) {
    console.log(`Parabéns! Suas notas são ${notas}. Você foi aprovado com média ${media.toFixed(2)}`)
} else {
    console.log(`Suas notas são ${notas}. Infelizmente você foi reprovado com média ${media.toFixed(2)}`)
}