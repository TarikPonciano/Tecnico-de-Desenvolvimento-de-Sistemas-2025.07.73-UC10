const subtrair = require("./questao2")

test("Subtrair dois números positivos", () => {
    expect(subtrair(10, 20)).toBe(-10)
})

test("Subtrair dois números negativos", () => {
    expect(subtrair(-5, -15)).toBe(10)
})

test("Subtrair um número positivo por um negativo", () => {
    expect(subtrair(35, -5)).toBe(40)
})

test("Tentar subtrair usando algum número inválido", () => {
    expect(subtrair('a', 20)).toBe("Digite dois números válidos!")
})