let valor = parseInt(prompt("Digite um valor: "));

while (valor>0) {
    if (valor>maiorValor) {
        maiorValor=valor
    }
    if (valor<valorAnterior) {
        valorAnterior = valor
    }
    console.log (valor);
    if (valor<0) {
        console.log ("O valor digitado é negativo");

    } else {
        console.log ("O valor selecionado é positivo");
        valorAnterior++
        
    }

}