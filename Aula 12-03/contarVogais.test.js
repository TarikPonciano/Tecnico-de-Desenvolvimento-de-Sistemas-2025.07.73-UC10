const contarVogais = require("./contarVogais")

describe("Q7. Função Contar Vogais", () => {

    test("Teste com palavra contendo apenas minúsculas", () => {
        expect(contarVogais("banana")).toBe(3)
    })

    test("Teste com palavra contendo maiusculas e minúsculas", () => {
        expect(contarVogais("BaNAna")).toBe(3)
    })

    test("Teste com palavra contendo apenas maiusculas", () => {
        expect(contarVogais("ABACAXI")).toBe(4)
    })

    test("Teste com palavra vazia", () => {
        expect(contarVogais("")).toBe(0)
    })

})