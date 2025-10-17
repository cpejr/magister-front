import { MainArea, Content, Title, Text } from "./styles";
import Header from "../../Components/Header/Header";
function Home() {
  return (
    <>
      <Header></Header>
      <MainArea>
        <Content>
          <Title>Magister - sentidos revelados</Title>
          <Text>
            Nem tudo o que se lê está na superfície. Há camadas invisíveis onde
            o sentido repousa, silencioso, esperando ser tocado por quem vê além
            das letras.
            <br />O Magister é um espaço para essa travessia — onde o texto se
            abre e o sentido se revela em significado profundo
          </Text>
        </Content>
      </MainArea>
    </>
  );
}

export default Home;
