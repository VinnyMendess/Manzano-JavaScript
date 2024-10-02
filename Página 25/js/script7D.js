let tempoViagem = prompt("Informe o tempo gasto na viagem (em horas):");
let velocidadeMedia = prompt("Informe a velocidade média durante a viagem (em km/h):");

let distancia = tempoViagem * velocidadeMedia;
let litrosUsados = distancia / 12;

console.log("Velocidade média: " + velocidadeMedia + " km/h");
console.log("Tempo gasto: " + tempoViagem + " horas");
console.log("Distância percorrida: " + distancia + " km");
console.log("Litros de combustível usados: " + litrosUsados.toFixed(2) + " litros");
