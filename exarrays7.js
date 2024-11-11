const prompt = require(`prompt-sync`)()

// Crie um array dias com os elementos ["segunda", "terça", "quarta", "quinta", 
// "sexta", "sabado"]. Inverta a ordem do array e exiba o resultado no console.

const dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado"];

const diasInvertidos = new Array(dias.length);

for (let i = 0; i < dias.length; i++) {
    diasInvertidos[i] = dias[dias.length - 1 - i]
}
