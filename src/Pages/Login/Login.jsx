import Header from "../../Components/Header/header";
import { Botao1, Container, Input , Select} from "./styles";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login (){
    const [nome, setNome] = useState("");
    const [profissao, setProfissao] = useState("");
    const navigate = useNavigate();
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
                <option value="" disabled>
                    Profissão
                </option>

                {profissoes.map((prof, index) => (
                <option key={index} value={prof}>
                    {prof}
                </option>
                
                ))}
            </Select>
            <Botao1 onClick={() => navigate("/texto")}>Login</Botao1>
        </Container>
    )
}