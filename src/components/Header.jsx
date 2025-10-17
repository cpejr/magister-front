import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4a2803ff;
  padding: 16px 32px;
  height: 100px;
`;

const ButtonLogin = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  color: black;
  transition: all 0.3s;

  &:hover {
    color: #60a5fa;
    border: 2px solid #60a5fa;
  }
`;

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <h2 style={{ color: "white" }}>Labore</h2>
      {user ? (
        <>
          <span style={{ color: "white", marginRight: "20px" }}>
            Olá, {user.nome}!
          </span>
          <ButtonLogin onClick={logout}>Sair</ButtonLogin>
        </>
      ) : (
        <ButtonLogin onClick={() => navigate("/login")}>LOGIN</ButtonLogin>
      )}
    </HeaderWrapper>
  );
}
