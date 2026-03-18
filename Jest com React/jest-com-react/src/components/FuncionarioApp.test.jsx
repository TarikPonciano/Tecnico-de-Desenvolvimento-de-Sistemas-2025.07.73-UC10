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

    test("Verificar exibição de erro ao preencher formulário", async () => {
        render(<FuncionarioApp />)

        const user = userEvent.setup()

        await user.click(screen.getByRole('button', { name: /adicionar/i }))

        expect(screen.getByRole('alert')).toHaveTextContent('Preencha todos os campos!')


    })


})