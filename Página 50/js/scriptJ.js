dividendo, divisor, quociente;

dividendo = parseInt(prompt("Digite um valor para o dividendo: "));
divisor = parseInt(prompt("Digite um valor para o divisor: "));

if (divisor === 0) {
    console.log("Impossível dividir por zero.");
} else {
    quociente = 0;
    do {
        dividendo -= divisor;
        quociente++;
    } while (dividendo >= divisor);
    console.log(`O quociente da divisão é: ${quociente}`);
}
