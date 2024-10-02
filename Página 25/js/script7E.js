let valor = prompt("Informe o valor da prestação:");
let taxa = prompt("Informe a taxa de juros (%):");
let tempo = prompt("Informe o tempo de atraso (em meses):");

let prestacao = parseFloat(valor) + (parseFloat(valor) * (parseFloat(taxa) / 100) * parseFloat(tempo));

console.log("O valor da prestação em atraso é: R$ " + prestacao.toFixed(2));
