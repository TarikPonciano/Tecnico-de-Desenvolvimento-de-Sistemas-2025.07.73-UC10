import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FuncionarioApp } from "./FuncionarioApp"

describe("Testes da Tela Cadastro de Funcionários", () => {
    test("Verificar renderização dos campos do formulário", () => {
        render(<FuncionarioApp />)

        expect(screen.getByPlaceholderText("Digite o seu nome")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Digite o seu cargo")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Digite o seu cpf")).toBeInTheDocument()

        expect(screen.getByRole('button', { name: /adicionar/i })).toBeInTheDocument()

        expect(screen.getByText('Nenhum funcionário cadastrado.')).toBeInTheDocument()

    })

    test("Verificar exibição de erro ao preencher formulário completamente vazio", async () => {
        render(<FuncionarioApp />)

        const user = userEvent.setup()

        await user.click(screen.getByRole('button', { name: /adicionar/i }))

        expect(screen.getByRole('alert')).toHaveTextContent('Preencha todos os campos!')


    })

    test("Verificar exibição de erro ao tentar cadastrar funcionário sem nome", async () => {
        render(<FuncionarioApp />)

        const user = userEvent.setup()

        await user.type(screen.getByPlaceholderText("Digite o seu cargo"), "Vendedor")
        await user.type(screen.getByPlaceholderText("Digite o seu cpf"), "12345678910")
        await user.type(screen.getByPlaceholderText("Digite o seu salario"), "5000.00")
        await user.type(screen.getByPlaceholderText("Digite o seu telefone"), "8598965423")
        await user.type(screen.getByPlaceholderText("Digite o seu cep"), "12345610")

        await user.click(screen.getByRole('button', { name: /adicionar/i }))

        expect(screen.getByRole('alert')).toHaveTextContent('Preencha todos os campos!')
    })

    // Crie um teste que verifica o preenchimento do formulário completo porém com erro de cpf




})