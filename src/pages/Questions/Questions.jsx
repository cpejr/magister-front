// src/pages/Questions/Questions.jsx
import { useAuth } from "../../context/AuthContext";
import OpenQuestion from "../../components/OpenQuestion";
import ClosedQuestion from "../../components/ClosedQuestion";
import { MainArea, Title } from "./QuestionsStyle";
import Header from "../../components/Header";

export default function Questions() {
  const { user } = useAuth();

  const handleAnswer = (answer) => {
    alert(`Resposta enviada: ${answer}`);
  };

  const openQuestions = ["Fale alguma coisa:"];
  const closedQuestions = ["Sim ou não?", "Talvez ou claro?"];

  return (
    <>
      <Header /> {}
      <MainArea>
        {user.profissao === "estudante" ? (
          <>
            <Title>Open Questions - Labore</Title>
            {openQuestions.map((q, i) => (
              <OpenQuestion key={i} question={q} onAnswer={handleAnswer} />
            ))}
          </>
        ) : (
          <>
            <Title>Closed Questions - Labore</Title>
            {closedQuestions.map((q, i) => (
              <ClosedQuestion
                key={i}
                question={q}
                options={["Sim", "Não", "Talvez"]}
                onAnswer={handleAnswer}
              />
            ))}
          </>
        )}
      </MainArea>
    </>
  );
}
