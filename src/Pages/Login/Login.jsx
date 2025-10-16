import Header from "../../Components/Header/header";
import { Botao1, Container, Input, Select } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login (){
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const navigate = useNavigate();
    const professions = [
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
            value = {name}
            onChange={(e) => setName(e.target.value)}
            ></Input>
            <Select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
            >
                <option value="" disabled>
                    Profissão
                </option>

                {professions.map((prof, index) => (
                <option key={index} value={prof}>
                    {prof}
                </option>
                
                ))}
            </Select>
            <Botao1 onClick={() => navigate("/texto")}>Login</Botao1>
        </Container>
    )
}
