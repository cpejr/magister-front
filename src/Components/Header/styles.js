import styled from "styled-components";
//import { Link } from "react-router-dom";

export const StyledHeader= styled.div`
height: 90px;
width: 100%;
margin-bottom: 30px;
background-color:  #E0F2FE;
color: black;
display: flex;
align-items: center;
font-size: 30px;
justify-content: space-between;
flex-direction: row;
`
export const Botao = styled.button`

background-color: #60A5FA;
width: 100px;
height: 50px;
font-size: 20px;
font-family: Merriweather;
border: none;
border-radius: 10px;
margin-bottom: 30px;
color: white;
//margin-left: 90%;
margin-top:30px;
margin-right: 10px;
  
`;

export const Textos = styled.div`
width: 200px;
height: 50px;
font-size: 20px;
font-family: Merriweather;
font-weight: bold;
margin-bottom: 30px;
margin-top:45px;
margin-left: 150px;




`

/*export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: color 0.3s;
    margin-right: 200px;

    &:hover {
        color: #005fa3;
    }
`;*/