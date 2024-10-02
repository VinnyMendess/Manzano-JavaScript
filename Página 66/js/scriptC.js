let vetA = [];
let vetB = [];
let x;

for (x = 1; x <= 8; x++) {
    vetA[x] = parseInt(prompt(`Digite um valor para o vetor A na posição ${x}:`));
    vetB[x] = vetA[x] * 3;
}

console.log("Os valores do vetor B (multiplicados por 3) são:");
for (x = 1; x <= 8; x++) {
    console.log(`Vetor B na posição ${x}: ${vetB[x]}`);
}
