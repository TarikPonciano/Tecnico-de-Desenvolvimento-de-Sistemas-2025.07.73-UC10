import { validarCPF } from "./funcionarioUtils"

// Crie pelo menos 4 testes para a funcionalidade ValidarCPF

describe("Validar função validarCPF", () => {
    test("Teste de cpfs válidos", () => {
        expect(validarCPF("922.508.320-30")).toBeTruthy()
        expect(validarCPF("92250832030")).toBeTruthy()
    })

    test("Teste de cpfs com tamanho inválido", () => {
        expect(validarCPF("922508320")).toBeFalsy()
        expect(validarCPF("922.508.320")).toBeFalsy()
        expect(validarCPF("922508.320")).toBeFalsy()
    })

    test("Teste de cpfs com repetição de digitos", () => {
        expect(validarCPF("11111111111")).toBeFalsy()
        expect(validarCPF("111.111.111-11")).toBeFalsy()
    })

    test("Teste de cpfs com caracteres invalidos", () => {

        expect(validarCPF("abcdefghijk")).toBeFalsy()
    })


})

// Crie a função de validarCPF
