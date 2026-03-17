import { useState } from "react";
import { validarCPF } from "../utils/funcionarioUtils";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import "./FuncionarioApp.css"

export function FuncionarioApp(){

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


    return (
        <div>
            <h1>Cadastro de Funcionários</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px", width:"20%", margin:"auto"}} >
                <input name="nome" placeholder="Digite o seu nome" value={form.nome}/>
                <input name="cargo" placeholder="Digite o seu cargo" value={form.cargo}/>
                <input name="cpf" placeholder="Digite o seu cpf" value={form.cpf}/>
                <input name="telefone" placeholder="Digite o seu telefone" value={form.telefone}/>
                <input name="salario" placeholder="Digite o seu salario" value={form.salario}/>
                <input name="cep" placeholder="Digite o seu cep" value={form.cep}/>

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );

}