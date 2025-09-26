import {
  Cabecalho,
  Centro,
  MenuItem,
  BotaoLogin,
  MainArea,
  Conteudo,
  Titulo,
  Texto,
} from "../Style";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Cabecalho>
        <Centro>
          <MenuItem to="/">Quem Somos</MenuItem>
          <MenuItem to="/">Gamificação</MenuItem>
          <MenuItem to="/">Tradutor</MenuItem>
        </Centro>

        {user ? (
          <>
            <span style={{ color: "white", marginRight: "20px" }}>
              Olá, {user.nome}!
            </span>
            <BotaoLogin onClick={logout}>Sair</BotaoLogin>
          </>
        ) : (
          <BotaoLogin onClick={() => navigate("/login")}>LOGIN</BotaoLogin>
        )}
      </Cabecalho>

      <MainArea>
        <Conteudo>
          <Titulo>TÍTULO</Titulo>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            sem et justo fermentum ultricies. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti. Sed nec eros id justo vestibulum commodo. Nam
            vitae ex in velit aliquet volutpat. Mauris sit amet urna non turpis
            blandit viverra. Cras ac lectus sed urna faucibus tincidunt. Proin
            malesuada, justo sit amet tincidunt ultricies, magna dolor luctus
            odio, et dapibus enim enim id justo. Curabitur gravida ligula nec
            lectus dictum, vitae vulputate elit faucibus. Integer vitae lacus a
            libero sodales convallis. Aliquam erat volutpat. Donec mollis massa
            sit amet lectus faucibus, in malesuada tortor viverra.
          </Texto>
        </Conteudo>
      </MainArea>
    </>
  );
}

export default Home;
