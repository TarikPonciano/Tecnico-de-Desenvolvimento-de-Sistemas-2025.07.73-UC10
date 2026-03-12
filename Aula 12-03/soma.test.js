const soma = require("./soma")

describe("Testes Função Soma", () => {

    test("Soma de números positivos", () => {

        expect(soma(6, 8)).toBe(14)
    })

    test("Soma de números negativos", () => {
        expect(soma(-7, -3)).toBe(-10)
    })

    test("Soma de números negativos com positivo", () => {
        expect(soma(-8, 3)).toBe(-5)
    })

    test("Soma com primeiro número inválido", () => {
        expect(soma('a', 8)).toBe("Digite números válidos!")
    })

    test("Soma com segundo número inválido", () => {
        expect(soma(8, 'a')).toBe("Digite números válidos!")
    })

    test("Soma com dois números inválidos", () => {
        expect(soma('a', 'b')).toBe("Digite números válidos!")
    })

    test("Soma com primeiro número vazio", () => {
        expect(soma('', 8)).toBe("Digite números válidos!")
    })

})