// Enunciado: Considere um array colors = ["red", "blue", "green"].
// Use o método .shift() para remover o primeiro elemento e, em seguida, o método .unshift()
// para adicionar "purple" no início do array. Qual será o conteúdo final do array colors? 
// Entrada: ["red", "blue", "green"]

let colors = ["red", "blue", "green"];
colors.shift();
console.log(colors);
colors.unshift("purple");
console.log(colors);
