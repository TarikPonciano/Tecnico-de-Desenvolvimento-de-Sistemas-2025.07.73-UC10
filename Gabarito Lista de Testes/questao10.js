function maiorNumero(listaNumeros) {

    if (listaNumeros.length === 0) {
        return "Não foi possível determinar o maior número! Formato inválido!"
    }

    let maior = listaNumeros[0]

    listaNumeros.forEach(numero => {
        if (numero > maior) {
            maior = numero
        }
    });

    return maior
}

module.exports = maiorNumero;