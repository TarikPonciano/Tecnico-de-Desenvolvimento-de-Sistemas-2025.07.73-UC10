import { useState } from "react";
import { validarCPF } from "../utils/funcionarioUtils";
import "./FuncionarioApp.css"

export function FuncionarioApp() {

    const [funcionarios, setFuncionarios] = useState([]);

    const [form, setForm] = useState({
        nome: '',
        cargo: '',
        cpf: '',
        telefone: '',
        salario: '',
        cep: ''
    })

    const [erro, setErro] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const adicionar = (e) => {
        e.preventDefault()

        if (!form.nome.trim() || !form.cargo.trim() || !form.telefone.trim() || !form.cpf.trim() || !form.salario.trim() || !form.cep.trim()) {
            setErro("Preencha todos os campos!");
            return
        }

        if (!validarCPF(form.cpf.trim())) {
            setErro("CPF INVÁLIDO!")
            return
        }

        const novoFuncionario = {
            id: Date.now(),
            ...form,
        }

        // ISSO NÃO ENGATILHA A REAÇÃO DO REACT funcionarios.push(novoFuncionario)

        setFuncionarios([...funcionarios, novoFuncionario])
        setForm({
            nome: '',
            cargo: '',
            cpf: '',
            telefone: '',
            salario: '',
            cep: ''
        })
        setErro('')

        console.log(funcionarios)

    }

    return (
        <div>
            <h1>Cadastro de Funcionários</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "20%", margin: "auto" }} onSubmit={adicionar} >
                <input name="nome" placeholder="Digite o seu nome" value={form.nome} onChange={handleChange} />
                <input name="cargo" placeholder="Digite o seu cargo" value={form.cargo} onChange={handleChange} />
                <input name="cpf" placeholder="Digite o seu cpf" value={form.cpf} onChange={handleChange} />
                <input name="telefone" placeholder="Digite o seu telefone" value={form.telefone} onChange={handleChange} />
                <input name="salario" placeholder="Digite o seu salario" value={form.salario} onChange={handleChange} />
                <input name="cep" placeholder="Digite o seu cep" value={form.cep} onChange={handleChange} />

                {
                    erro === '' ? (<p></p>) : (<p role="alert"> {erro} </p>)
                }

                {/* Técnica com curto circuito {erro && <p>{erro}</p>} */}

                <button type="submit">Adicionar</button>
            </form>
            <h2>Lista de Funcionários</h2>
            {
                funcionarios.length === 0 ? (
                    <p>Nenhum funcionário cadastrado.</p>
                ) : (
                    <ul>
                        {funcionarios.map(f => (
                            <li key={f.id}> {f.nome} - {f.cargo} - {f.cpf} - {f.telefone} - {f.salario} - {f.cep}</li>
                        ))}
                    </ul>
                )
            }
        </div >
    );

}