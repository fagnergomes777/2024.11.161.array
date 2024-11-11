// let notas = [10, 5, 7, 8, 9, 6, 8, 10, 1]
// criar um arrays vazio chamado notas
let notas = []

// adicionar as notas 10, 5, 7, 8 ao arrays notas
notas.push(10)
notas.push(5)
notas.push(7)
notas.push(8)

// alterando notas de indice 1 para 7
notas[1] = 7

// percorrer o array notas e exibir cada elemento
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i+1}: ${notas[i]}`)
}