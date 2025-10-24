import styled from "styled-components";
import pergaminho from "../../Components/Background/pergaminho.jpg";

export const Container = styled.div`
  background-image: url(${pergaminho});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 89vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 2;
  }

  > * {
    z-index: 3;
    position: relative;
  }
`;

export const Input = styled.textarea`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 20px;
  width: 70%;
  height: 20vh;
  font-size: 22px;
  font-weight: bold;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 8px;
  border: 2px solid black;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 10px;
  resize: none;
  overflow: auto;
  line-height: 1.5;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  &::placeholder {
    color: black;
  }
`;

export const Botao1 = styled.button`
  background-color: #d5c97b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  width: 150px;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-left: 800px;
`;

export const Botao2 = styled.button`
  background-color: #d5c97b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  width: 150px;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-left: 800px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Transcrito = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 20px;
  width: 70%;

  height: 20vh;
  font-size: 25px;
  font-weight: bold;
  border: 2px solid black;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin-top: 30px;
  margin-bottom: 30px;

  overflow-y: auto;
  word-wrap: break-word;
`;
