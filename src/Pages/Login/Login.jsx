import Header from "../../Components/Header/header";
import { Botao1, Botao2, Container, Input , Select} from "./styles";
import { useState } from "react";

export default function Login (){
    const [nome, setNome] = useState("");
    const [profissao, setProfissao] = useState("");
    const profissoes = [
    "Psicanalista",
    "Estudante",
    "Professor",
  ];

    return ( 
        <Container>
            <Header></Header>
            <Input 
            type="text" 
            placeholder="Nome"
            value = {nome}
            onChange={(e) => setNome(e.target.value)}
            ></Input>
            <Select
                value={profissao}
                onChange={(e) => setProfissao(e.target.value)}
            >
                <option value="">Profissão</option>
                {profissoes.map((prof, index) => (
                <option key={index} value={prof}>
                    {prof}
                </option>
                
                ))}
            </Select>
            <Botao1>Teste do Sistema</Botao1>
            <Botao2>Gamificação</Botao2>
        </Container>
    )
}