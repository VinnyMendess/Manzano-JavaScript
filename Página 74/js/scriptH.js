let base = parseInt(prompt("Digite o valor da base"))
let expoente = parseInt(prompt("Digite o valor do expoente"))

resultado=1
for(contadora = 1; contadora<=expoente; contadora++) {
    resultado *= base
}

console.log(`${base}^${expoente} = ${resultado}`);