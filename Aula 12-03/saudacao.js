function saudacao(nome) {
    if (nome) {
        return `Olá, ${nome}!`
    }
    else {
        return "Envie um nome válido!"
    }
}

module.exports = saudacao;