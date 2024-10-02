somadora = 0;
contadora = 1;
do {
    fatorial = 1;
    do {
        if (contadora % 2 === 0) {
            contadora++;
        } else {
            for (let i = 1; i <= contadora; i++) {
                fatorial *= i;
            }
            somadora += fatorial;
            console.log(`Fatorial de ${contadora} = ${fatorial}`);
            contadora++; 
        }
    } while (contadora <= 9); 

} while (contadora <= 9);

console.log(`Somatório = ${somadora}`);