const maiorNumero = require("./questao10")


describe("Testes Questão 10", () => {

    // Testes de validação de entrada

    test("Deve retornar mensagem de erro quando o parâmetro não for um array", () => {
        const resultado = maiorNumero("123");
        expect(resultado).toBe("Não foi possível determinar o maior número! Formato inválido!");
    });

    test("Deve retornar mensagem de erro quando o array estiver vazio", () => {
        const resultado = maiorNumero([]);
        expect(resultado).toBe("Não foi possível determinar o maior número! Formato inválido!");
    });

    test("Deve retornar mensagem de erro quando receber null", () => {
        const resultado = maiorNumero(null);
        expect(resultado).toBe("Não foi possível determinar o maior número! Formato inválido!");
    });

    // Testes de funcionamento correto

    test("Deve retornar o maior número de uma lista simples", () => {
        const resultado = maiorNumero([1, 2, 3, 4, 5]);
        expect(resultado).toBe(5);
    });

    test("Deve retornar o maior número quando ele estiver no início da lista", () => {
        const resultado = maiorNumero([10, 2, 3, 4]);
        expect(resultado).toBe(10);
    });

    test("Deve retornar o maior número quando ele estiver no meio da lista", () => {
        const resultado = maiorNumero([1, 8, 3, 4]);
        expect(resultado).toBe(8);
    });

    test("Deve funcionar com números negativos", () => {
        const resultado = maiorNumero([-10, -5, -2, -30]);
        expect(resultado).toBe(-2);
    });

    test("Deve funcionar com lista contendo apenas um número", () => {
        const resultado = maiorNumero([7]);
        expect(resultado).toBe(7);
    });

    test("Deve funcionar com números repetidos", () => {
        const resultado = maiorNumero([5, 5, 5, 5]);
        expect(resultado).toBe(5);
    });

});