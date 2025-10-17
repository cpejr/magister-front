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
  margin-bottom: 12px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionButton = styled.button`
  padding: 10px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#602b03" : "#4a2803ff")};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #602b03;
  }
`;

export default function ClosedQuestion({ question, options, onAnswer }) {
  const [selected, setSelected] = useState("");

  const handleClick = (option) => {
    setSelected(option);
    onAnswer(option);
  };

  return (
    <QuestionWrapper>
      <QuestionText>{question}</QuestionText>
      <OptionsContainer>
        {options.map((opt, i) => (
          <OptionButton
            key={i}
            type="button"
            selected={selected === opt}
            onClick={() => handleClick(opt)}
          >
            {opt}
          </OptionButton>
        ))}
      </OptionsContainer>
    </QuestionWrapper>
  );
}
