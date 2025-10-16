import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader= styled.header`
height: 90px;
width: 100%;
background-color:  #F0E7B0;
color: black;
display: flex;
align-items: center;
font-size: 30px;
position: relative;
  padding: 0 50px;

`
export const ContainerLink = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transform: translateX(-50%);
left: 50%;
gap: 10px;


`
export const Botao = styled.button`
background-color: #D5C97B;
width: 100px;
height: 50px;
font-size: 18px;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
border: none;
border-radius: 10px;
color: black;
margin-right: 10px;
margin-left: 80%;
`;

export const Divider = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: lighter;
`;

export const Logo= styled.div`
  display: flex;
  align-items: center;

`; 
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
    color: black;
    transition: color 0.3s;

    &:hover {
        color: #fffcfcff;
    }
`;