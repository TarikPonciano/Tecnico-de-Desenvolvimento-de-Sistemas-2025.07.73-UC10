function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return "Não foi possível determinar o maior número! Formato inválido!";
    }

    let maior = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }

    return maior;
}
module.exports = maiorNumero;