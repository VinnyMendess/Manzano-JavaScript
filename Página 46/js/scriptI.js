somadora = 0;
contadora = 1;

while (contadora <= 10) {
    valor = parseFloat(prompt("Digite o valor " + contadora + ":"));
    somadora += valor;
    contadora++;
}

mediaAritmetica = somadora / 10;

console.log("Soma total = " + somadora);
console.log("Média Aritmética = " + mediaAritmetica);
