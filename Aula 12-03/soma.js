function soma(n1, n2) {
    n1 = parseInt(n1)
    n2 = parseInt(n2)

    if (isNaN(n1) || isNaN(n2)) {
        return "Digite números válidos!"
    }

    return n1 + n2
}

module.exports = soma;

