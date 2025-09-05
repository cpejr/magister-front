import styled from "styled-components";


export const Container = styled.div`
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Input = styled.input`
background-color: #E0F2FE;
color: black;
border-radius: 20px;
width: 950px;
height: 120px;
font-size: 40px;
font-weight: bold;
font-family: Merriweather;
padding: 8px;
border: none;
align-self: center;
margin-top: 30px;
margin-bottom: 30px;
&::placeholder {
    color: black;
  }
`

export const Select = styled.select`
  background-color: #E0F2FE;
color: black;
border-radius: 20px;
width: 950px;
height: 120px;
font-size: 40px;
font-weight: bold;
font-family: Merriweather;
padding: 8px;
border: none;
align-self: center;
margin-top: 30px;
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
background-color: #60A5FA;
width: 200px;
height: 80px;
font-size: 24px;
font-family: Merriweather;
border: none;
border-radius: 10px;
margin-bottom: 30px;
`

export const Botao2 = styled.button`
background-color: #60A5FA;
width: 200px;
height: 80px;
font-size: 24px;
font-family: Merriweather;
border: none;
border-radius: 10px;
`