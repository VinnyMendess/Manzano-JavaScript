for(contadora = 0; contadora <= 15 ; contadora++){
    if (contadora ===0) {
        resultado = 1
    } else {
        resultado = 1
        for( potencia = 1; potencia <=contadora; potencia++)
            resultado *= 2
        
    }
}

console.log(`3^${contadora} = ${resultado}`);