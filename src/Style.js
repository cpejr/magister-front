import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial;
    background-color: white;
    color: black;
  }
`;

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #4a2803ff;
  height: 100px;
`;

export const Esquerda = styled.div`
  flex: 1;
`;

export const Centro = styled.nav`
  display: flex;
  gap: 50px;
  flex: 2;
  justify-content: center;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #ffffffff;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #60a5fa;
  }
`;

export const Direita = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const BotaoLogin = styled.button`
  padding: 10px 30px;
  border: none;
  background-color: #ffffffff;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    color: #60a5fa;
    background-color: white;
    border: 2px solid #60a5fa;
  }
`;

export const MainArea = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url("/fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Conteudo = styled.div`
  max-width: 1200px;
  padding: 32px;
`;

export const Titulo = styled.h1`
  margin-bottom: 16px;
  font-family: "Merriweather", serif;
  font-size: 80px;
  text-align: center;
`;

export const Texto = styled.p`
  line-height: 1.6;
  font-size: 16px;
  text-align: justify;
`;
