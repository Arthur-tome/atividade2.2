//nome:Arthur de Oliveira Tomé
//Matricula:25114290097
//1.Crie um array com 5 elementos da forma string.
let frutas = ["Maçã", "Banana", "Laranja", "Pêra", "Uva"];
//2.Determine o quarto elemento desse array usando indexação.
console.log("4º elemento:", frutas[3]);
//3.Determine o último elemento deste array.
console.log("Último elemento:", frutas[frutas.length - 1]);
console.log("Elementos com for tradicional:");
//4. Use for loops e liste os elementos do array de duas formas:
//4.1. usando for loop sobre os índices
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
//4.2. usando for...of
console.log("Elementos com for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}
//5.Ordene os elementos deste array em forma alfabética.
frutas.sort();
console.log("Ordenado (alfabético):", frutas);
//6. Ordene os elementos do array em forma alfabética reversa
frutas.sort().reverse();
console.log("Ordenado (reverso alfabético):", frutas);
//7. Crie um array com elementos numéricos. 
let numeros = [42, 5, 13, 88, 1];
//7.1 ordene os elementos em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
//7.2 ordene os elementos em ordem decrescente
numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
//8. Crie um array com 3 elementos. 
let cores = ["Vermelho", "Azul", "Verde"];
//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
cores.push("Amarelo");
console.log("Após adicionar Amarelo, total:", cores.length);
cores.push("Roxo");
console.log("Após adicionar Roxo, total:", cores.length);
cores.push("Laranja");
console.log("Após adicionar Laranja, total:", cores.length);
cores.push("Preto");
console.log("Após adicionar Preto, total:", cores.length);
//8.2 remova o último elemento e mostre o elemento que foi eliminado.
let removido = cores.pop();
console.log("Elemento removido:", removido);
console.log("Array final:", cores);
