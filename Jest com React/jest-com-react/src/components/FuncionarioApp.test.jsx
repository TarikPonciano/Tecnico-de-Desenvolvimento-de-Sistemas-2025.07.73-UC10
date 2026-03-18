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

    // Crie um teste que verifica o preenchimento do formulário completo porém com cpf inválido

    test("Verificar exibição de erro ao tentar cadastrar funcionário com cpf inválido", async () => {
        render(<FuncionarioApp />)

        const user = userEvent.setup()

        await user.type(screen.getByPlaceholderText("Digite o seu nome"), "Mario")
        await user.type(screen.getByPlaceholderText("Digite o seu cargo"), "Vendedor")
        await user.type(screen.getByPlaceholderText("Digite o seu cpf"), "12345678")
        await user.type(screen.getByPlaceholderText("Digite o seu salario"), "5000.00")
        await user.type(screen.getByPlaceholderText("Digite o seu telefone"), "8598965423")
        await user.type(screen.getByPlaceholderText("Digite o seu cep"), "12345610")

        await user.click(screen.getByRole('button', { name: /adicionar/i }))

        expect(screen.getByRole('alert')).toHaveTextContent('CPF INVÁLIDO!')
    })

    // Crie um teste que verifica a inserção correta de um usuário

    test("Verificar inserção de funcionário válido", async () => {
        render(<FuncionarioApp />)

        const user = userEvent.setup()

        const f = {
            nome: "Mario",
            cargo: "Vendedor",
            cpf: "52365158072",
            salario: "5000.00",
            telefone: "8598965423",
            cep: "12345610"
        }

        await user.type(screen.getByPlaceholderText("Digite o seu nome"), f.nome)
        await user.type(screen.getByPlaceholderText("Digite o seu cargo"), f.cargo)
        await user.type(screen.getByPlaceholderText("Digite o seu cpf"), f.cpf)
        await user.type(screen.getByPlaceholderText("Digite o seu salario"), f.salario)
        await user.type(screen.getByPlaceholderText("Digite o seu telefone"), f.telefone)
        await user.type(screen.getByPlaceholderText("Digite o seu cep"), f.cep)

        await user.click(screen.getByRole('button', { name: /adicionar/i }))

        expect(screen.getByText(`${f.nome} - ${f.cargo} - ${f.cpf} - ${f.telefone} - ${f.salario} - ${f.cep}`)).toBeInTheDocument()

        expect(screen.getByPlaceholderText("Digite o seu nome")).toHaveValue("")
        expect(screen.getByPlaceholderText("Digite o seu cargo")).toHaveValue("")


    })




})