resposta = "Sim"
areaTotal= 0;

while (resposta !== "Não") {
    let comodo = prompt("Digite o nome do comodo")
    let largura = parseFloat(prompt("Digite a largura: "));
    let comprimento = parseFloat(prompt("Digite o comprimento: "));

    area  = largura * comprimento;
    console.log (`A área do ${comodo} é ${area}m²`);
    areaTotal += area;
    resposta = prompt("Deseja continuar? (Sim/Não)");

}

console.log (`A área de todos os cômodos é de:  ${areaTotal}m²`);
