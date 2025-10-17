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

export const Input = styled.textarea`
  background-color: rgba(80, 80, 80, 0.2);
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 950px;
  height: 350px;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  padding: 8px;
  border: 2px solid black;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 10px;
  resize: none;
  overflow: auto;
  line-height: 1.5;
  box-sizing: border-box;

  &::placeholder {
    color: black;
  }
`;



export const Botao1 = styled.button`
background-color: #D5C97B;;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
width: 150px;
height: 60px;
font-size: 20px;
border: none;
border-radius: 10px;
margin-bottom: 30px;
margin-left: 800px;
cursor: pointer;
`

export const Botao2 = styled.button`
background-color: #D5C97B;;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
width: 150px;
height: 60px;
font-size: 20px;
border: none;
border-radius: 10px;
margin-left: 800px;
margin-bottom: 20px;
cursor: pointer;
`

export const Transcrito = styled.div`
background-color: rgba(80, 80, 80, 0.2);
color: black;
border-radius: 20px;
width: 950px;
height: 100px;
font-size: 25px;
font-weight: bold;
border: 2px solid black;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
padding: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
margin-top: 30px;
margin-bottom: 30px;
`