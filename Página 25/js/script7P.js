let validos = parseFloat(prompt("Digite a quantidade de votos validos: "))
let nulos = parseFloat(prompt("Digite a quantidade de votos nulos: "))
let brancos = parseFloat(prompt("Digite a quantidade de votos brancos: "))
let total = validos + nulos + brancos
percentualValidos   = (validos / total) * 100
percentualNulos      = (nulos / total) * 100
percentualBrancos    = (brancos / total) * 100
console.log(`Percentual de votos validos: ${percentualValidos}%`)
