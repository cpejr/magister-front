import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader= styled.div`
height: 90px;
width: 100%;
background-color:  #F0E7B0;
color: black;
display: flex;
align-items: center;
font-size: 30px;
padding: 0 50px;
justify-content: space-between;

`
export const ContainerLink = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const Botao = styled.button`

background-color: #D5C97B;
width: 100px;
height: 50px;
font-size: 20px;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
border: none;
border-radius: 10px;
margin-bottom: 30px;
color: black;
margin-top:30px;
margin-right: 10px;
  
`;
export const Divider = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: lighter;
`;

export const Logo= styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Merriweather";
  font-weight: bold;
  font-size: 24px;
`; 
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
    color: black;
    transition: color 0.3s;

    &:hover {
        color: #fffcfcff;
    }
`;