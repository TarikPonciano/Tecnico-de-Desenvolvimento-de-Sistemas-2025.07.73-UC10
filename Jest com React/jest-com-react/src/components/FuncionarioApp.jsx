import { useState } from "react";
import { validarCPF } from "../utils/funcionarioUtils";

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
        </div>
    );

}