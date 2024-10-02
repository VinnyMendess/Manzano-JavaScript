maiorValor = Number.NEGATIVE_INFINITY;
valor, valorAnterior = Number.POSITIVE_INFINITY;

do {
    valor = parseFloat(prompt("Digite um número"));

    if (valor > maiorValor) {
        maiorValor = valor;
    }

    if (valor < valorAnterior) {
        valorAnterior = valor;
    }

    if (valor < 0) {
        console.log(`O ${valor} é negativo, o maior valor inserido é: ${maiorValor} e o menor: ${valorAnterior}`);
    } else {
        console.log("O valor selecionado é positivo");
        valorAnterior = valor;
    }
} while (valor >= 0);
