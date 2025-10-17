import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a2803ff;
  height: 100px;
`;

export const MainArea = styled.main`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f9f9, #ddd);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #4a2803ff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 16px;

  &:hover {
    background-color: #603a10;
  }
`;
