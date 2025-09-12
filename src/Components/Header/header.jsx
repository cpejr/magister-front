import { useNavigate } from "react-router-dom"
import {Botao, StyledHeader, StyledLink} from "./styles"

export default function Header() {
    const navigate = useNavigate();
    return (
     <StyledHeader>
        <StyledLink to ="/" >Quem somos?</StyledLink>
        <StyledLink to = "/texto"> Dixit</StyledLink>
        <StyledLink to = "/gamificação">Labore</StyledLink>
                  
        <Botao onClick={() => navigate("/login")}>Login</Botao>
     </StyledHeader>
    )
}


