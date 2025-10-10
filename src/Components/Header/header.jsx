import { useNavigate } from "react-router-dom"
import {Botao, StyledHeader, StyledLink, Divider, Logo} from "./styles"

export default function Header() {
    const navigate = useNavigate();
    return (
     <StyledHeader>
        <Logo></Logo>
        <StyledLink to ="/" >Quem somos?</StyledLink>
         <Divider>|</Divider>
        <StyledLink to = "/texto"> Dixit</StyledLink>
         <Divider>|</Divider>
        <StyledLink to = "/gamificação">Labore</StyledLink>
                  
        <Botao onClick={() => navigate("/login")}>Login</Botao>
     </StyledHeader>
    )
}


