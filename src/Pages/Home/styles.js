import styled from "styled-components";

export const MainArea = styled.main`
  width: 100%;
  min-height: 89vh;
  background-image: url("/fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  filter: brightness(1) saturate(0.8);
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-family: "Merriweather", serif;
  font-size: 80px;
  text-align: center;
`;

export const Text = styled.p`
  line-height: 1.6;
  font-size: 16px;
  text-align: justify;
`;
