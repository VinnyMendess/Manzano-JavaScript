for (contadora = 1; contadora <= 10; contadora += 2) {
    fatorial = 1;
    for (somadora = 1; somadora <= contadora; somadora++) {
        fatorial *= somadora;
    }
    console.log(`Fatorial de ${contadora} = ${fatorial}`);
}
