// src/components/OpenQuestion.jsx
import { useState } from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;

const AnswerInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #4a2803ff;
  color: white;

  &:hover {
    background-color: #602b03;
  }
`;

export default function OpenQuestion({ question, onAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() !== "") {
      onAnswer(answer);
      setAnswer("");
    }
  };

  return (
    <QuestionWrapper>
      <QuestionText>{question}</QuestionText>
      <form onSubmit={handleSubmit}>
        <AnswerInput
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </QuestionWrapper>
  );
}
