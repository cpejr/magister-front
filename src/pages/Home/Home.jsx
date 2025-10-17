import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Header,
  Center,
  MenuItem,
  ButtonLogin,
  Burger,
  MobileMenu,
  MainArea,
  Content,
  Title,
  Text,
} from "./HomeStyle";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header>
        <Burger onClick={() => setMenuOpen(!menuOpen)}>☰</Burger>

        <Center className={menuOpen ? "open" : ""}>
          <MenuItem to="/">Quem Somos</MenuItem>
          <MenuItem to="/questions">Labore</MenuItem>
          <MenuItem to="/">Tradução DIXIT</MenuItem>
        </Center>

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
      </Header>

      {menuOpen && (
        <MobileMenu>
          <MenuItem to="/" onClick={() => setMenuOpen(false)}>
            Quem Somos
          </MenuItem>
          <MenuItem to="/questions" onClick={() => setMenuOpen(false)}>
            Labore
          </MenuItem>
          <MenuItem to="/" onClick={() => setMenuOpen(false)}>
            Tradução DIXIT
          </MenuItem>
        </MobileMenu>
      )}

      <MainArea>
        <Content>
          <Title>TÍTULO</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            sem et justo fermentum ultricies. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti.
          </Text>
        </Content>
      </MainArea>
    </>
  );
}

export default Home;
