import styled from "styled-components";

export const MainArea = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 32px;
  color: #4a2803;
  font-family: "Merriweather", serif;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
