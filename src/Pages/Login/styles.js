import styled from "styled-components";
import pergaminho from "../../Components/Background/pergaminho.jpg"


export const Container = styled.div`
  background-image: url(${pergaminho});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const Input = styled.input`
background-color: rgba(80, 80, 80, 0.2);
border: 2px solid black;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
color: black;
border-radius: 20px;
width: 800px;
height: 110px;
font-size: 25px;
font-weight: bold;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
padding: 8px;
align-self: center;
margin-top: 110px;
margin-bottom: 30px;
&::placeholder {
    color: black;
  }
`

export const Select = styled.select`
background-color: rgba(80, 80, 80, 0.2);
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
border: 2px solid black;
color: black;
border-radius: 20px;
width: 800px;
height: 110px;
font-size: 25px;
font-weight: bold;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
padding: 8px;
align-self: center;
margin-top: 60px;
margin-bottom: 30px;
/* Remover aparência nativa */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Setinha customizada opcional */
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
`;


export const Botao1 = styled.button`
background-color: #D5C97B;;
width: 120px;
height: 60px;
font-size: 18px;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
border: none;
border-radius: 10px;
margin-bottom: 30px;
cursor: pointer;
`

