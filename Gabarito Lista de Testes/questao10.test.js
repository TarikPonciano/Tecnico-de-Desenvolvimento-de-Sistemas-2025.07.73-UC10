const maiorNumero = require("./questao10")


describe("Testes da Questão 10", () => {

    test("Teste simples com 4 números positivos", () => {
        expect(maiorNumero([20, 15, 60, 12])).toBe(60)
    })

    test("Teste simples com 4 números negativos", () => {
        expect(maiorNumero([-20, -15, -60, -12])).toBe(-12)
    })

    test("Teste simples com 2 números positivos e 2 negativos", () => {
        expect(maiorNumero([20, 15, -60, -12])).toBe(20)
    })

    test("Teste com lista vazia", () => {
        expect(maiorNumero([])).toBe("Não foi possível determinar o maior número! Formato inválido!")
    })

})