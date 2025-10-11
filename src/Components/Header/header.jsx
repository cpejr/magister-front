import { useNavigate } from "react-router-dom"
import {Botao, StyledHeader, StyledLink, Divider, Logo, ContainerLink} from "./styles"
import logo from "../Logo/logo.png"
export default function Header() {
    const navigate = useNavigate();
    return (
     <StyledHeader>
        <Logo>
        <img
            src={logo}
            alt="Logo"
            style={{ width:  150, height: 78}}
        />
        </Logo>
        <ContainerLink>
        <StyledLink to ="/" >Quem somos?</StyledLink>
         <Divider>|</Divider>
        <StyledLink to = "/texto"> Dixit</StyledLink>
         <Divider>|</Divider>
        <StyledLink to = "/gamificação">Labore</StyledLink>
        </ContainerLink>
        <Botao onClick={() => navigate("/login")}>Login</Botao>
     </StyledHeader>
    )
}


