somadora = 0
contadora = 1

do {
    if (contadora%2===0) {
        somadora += contadora;
        console.log (`A soma dos números pares é: ${somadora}`)
    }
    contadora++

} while (contadora>499);