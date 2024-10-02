 let base = parseFloat(prompt("Digite qual será a base: "))

 let expoente = parseFloat(prompt("Digite qual será o expoente: "))

 resultado = 1
 acumuladora = 0

 if (expoente<0) {
    console.log ("O expoente não pode ser negativo")

 } else {
    while (acumuladora<expoente) {
        resultado =  resultado * base
        

    }
 }