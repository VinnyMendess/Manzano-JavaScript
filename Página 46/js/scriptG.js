anterior = 0
atual = 1
contador = 1

while (contadora<15) {
    resultadora = atual+anterior
    console.log (resultadora)
    anterior = atual
    atual = resultadora
    contadora++

}