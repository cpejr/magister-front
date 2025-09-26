import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Cabecalho,
  MainArea,
  Conteudo,
  Titulo,
  Texto,
  BotaoLogin,
} from "../Style";

function Login() {
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("estudante");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(nome, profissao);
    navigate("/");
  };

  return (
    <>
      <Cabecalho>
        <Titulo style={{ fontSize: "32px", color: "white" }}>Login</Titulo>
      </Cabecalho>

      <MainArea>
        <Conteudo>
          <form onSubmit={handleSubmit}>
            <Texto>Nome:</Texto>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <Texto>Profissão:</Texto>
            <select
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
            >
              <option value="estudante">Estudante</option>
              <option value="psicanalista">Psicanalista</option>
              <option value="professor">Professor</option>
            </select>

            <br />
            <BotaoLogin type="submit">Entrar</BotaoLogin>
          </form>
        </Conteudo>
      </MainArea>
    </>
  );
}

export default Login;
