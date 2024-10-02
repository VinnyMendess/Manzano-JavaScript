do {
    let valor = parseFloat(prompt("Digite um numero"));
    if (valor>0) {
        somadora+=valor
        contadora++
    } else {
        console.log("O valor é negativo")
    }

}while(valor<0)

    mediaAritmetica=somadora/contadora
    console.log (`A média aritmética é: ${mediaAritmetica} o total: ${contadora} somadora: ${somadora}`)