function contarVogais(palavra) {

    let numeroDeVogais = 0
    palavra = Array.from(palavra)

    palavra.forEach(letra => {
        if ("aeiou".includes(letra.toLowerCase())) {
            numeroDeVogais += 1
        }
    });

    return numeroDeVogais

}

module.exports = contarVogais;