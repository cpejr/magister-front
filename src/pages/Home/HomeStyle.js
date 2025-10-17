import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #4a2803ff;
  height: 100px;
  position: relative;
`;

export const Center = styled.nav`
  display: flex;
  gap: 50px;
  flex: 2;
  justify-content: center;

  @media (max-width: 728px) {
    display: none;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      background-color: #4a2803ff;
      padding: 20px 0;
      gap: 20px;
      align-items: center;
    }
  }
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #60a5fa;
  }
`;

export const ButtonLogin = styled.button`
  padding: 10px 30px;
  border: none;
  background-color: white;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    color: #60a5fa;
    border: 2px solid #60a5fa;
  }
`;

export const Burger = styled.div`
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

  @media (max-width: 728px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
    background-color: #4a2803ff;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
  }
`;

export const MainArea = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url("/fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled.div`
  max-width: 1200px;
  padding: 32px;
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
