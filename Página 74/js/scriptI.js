anterior = 0
atual = 1

for(contadora = 1; contadora<15;contadora++){
    resutado = atual + anterior;
    console.log (resutado);
    anterior= atual;
    atual = resutado;
}