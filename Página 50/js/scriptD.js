graosNoQuadro = 1;
somatorio = 1;
quadro = 2;

do {
    graosNoQuadro *= 2;
    somatorio += graosNoQuadro;
    quadro++;
} while (quadro <= 64);

console.log(`O somatório total de grãos no tabuleiro de xadrez é: ${somatorio}`);
