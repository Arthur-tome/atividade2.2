let frutas = ["Maçã", "Banana", "Laranja", "Pêra", "Uva"];
console.log("4º elemento:", frutas[3]);
console.log("Último elemento:", frutas[frutas.length - 1]);
console.log("Elementos com for tradicional:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log("Elementos com for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}
frutas.sort();
console.log("Ordenado (alfabético):", frutas);
frutas.sort().reverse();
console.log("Ordenado (reverso alfabético):", frutas);
let numeros = [42, 5, 13, 88, 1];
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
let cores = ["Vermelho", "Azul", "Verde"];
cores.push("Amarelo");
console.log("Após adicionar Amarelo, total:", cores.length);
cores.push("Roxo");
console.log("Após adicionar Roxo, total:", cores.length);
cores.push("Laranja");
console.log("Após adicionar Laranja, total:", cores.length);
cores.push("Preto");
console.log("Após adicionar Preto, total:", cores.length);
let removido = cores.pop();
console.log("Elemento removido:", removido);
console.log("Array final:", cores);