quarto, resposta;
largura, comprimento, area;

do {
    quarto = prompt("Digite o nome do cômodo: ");
    largura = parseFloat(prompt("Digite a largura do cômodo: "));
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "));

    area = comprimento * largura;

    console.log(`A área do ${quarto} é: ${area}`);
    resposta = prompt("Deseja continuar? Sim/Não ");
} while (resposta !== "Não" && resposta !== "não" && resposta !== "NÃO");

