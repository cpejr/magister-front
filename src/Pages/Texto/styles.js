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
height: 200px;
font-size: 40px;
font-weight: bold;
font-family: Merriweather;
padding: 8px;
border: none;
margin-top: 30px;
margin-bottom: 30px;
&::placeholder {
    color: black; 
  }

`


export const Botao1 = styled.button`
background-color: #60A5FA;
font-family: Merriweather;
width: 150px;
height: 60px;
font-size: 20px;
border: none;
border-radius: 10px;
margin-bottom: 30px;
margin-left: 800px;
`

export const Botao2 = styled.button`
background-color: #60A5FA;
font-family: Merriweather;
width: 150px;
height: 60px;
font-size: 20px;
border: none;
border-radius: 10px;
margin-left: 800px;
`

export const Transcrito = styled.div`
background-color: white;
color: black;
border-radius: 20px;
width: 950px;
height: 200px;
font-size: 40px;
font-weight: bold;
font-family: Merriweather;
padding: 8px;
border: none;
margin-top: 30px;
margin-bottom: 30px;
`