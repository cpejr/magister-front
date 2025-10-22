// src/pages/Questions/QuestionsStyle.js
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
  flex-direction: column;
  width: 100%;

`;
export const Title = styled.div`
color: black;
font-size: 30px;
font-weight: bold;
align-items: center;
align-self:center;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
margin-top: 50px;

`
export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  margin-top: 30px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  background-color: rgba(80, 80, 80, 0.2);
  border: 2px solid black;
  border-radius: 20px;
`;

export const Texto = styled.div `
color: black;
font-size: 16px;
font-weight: bold;
margin-left: 20px;
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
`