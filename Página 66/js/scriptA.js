let vet = []; // Declarando o array
let i;

for (i = 1; i <= 10; i++) {
    vet[i] = parseInt(prompt(`Digite o elemento ${i}:`));
}

console.log("Os elementos do vetor são:");
for (i = 1; i <= 10; i++) {
    console.log(vet[i]);
}
