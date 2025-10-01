import { useState } from "react";
import Header from "../../Components/Header/header";
import { Botao1, Botao2, Container, Input, Transcrito } from "./styles";

export default function Texto() {
  const [texto, setTexto] = useState("");

  return (
    <Container>
      <Header></Header>
      <Input
        type="text"
        placeholder="Escreva aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></Input>
      <Botao1> Transcrever</Botao1>
      <Transcrito>Tradução...</Transcrito>
      <Botao2>Voltar</Botao2>
    </Container>
  );
}
