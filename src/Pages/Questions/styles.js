import styled from "styled-components";
import pergaminho from "../../Components/Background/pergaminho.jpg";

export const Container = styled.div`
  background-image: url(${pergaminho});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;
export const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  align-self: center;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin-top: 50px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-top: 10px;
  }
`;

export const ImageTextosContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
  height: 1175px;
  overflow: scroll;
  width: 48%;
  max-width: 600px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-height: none;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Texto = styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
