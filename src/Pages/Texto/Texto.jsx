import { useState } from "react";
import Header from "../../Components/Header/header";
import { Botao1, Botao2, Container, Input , Transcrito} from "./styles";
import { useTranscreverTexto } from "../../Hooks/useTranscricao";


export default function Texto(){
    const [text, setText] = useState("");
    
    const {mutate: transcreverTexto, data, isLoading, isError} = useTranscreverTexto({
        onSuccess : (text) => {
             console.log("Transcrição recebida!")
        },
        onError: () => { console.log("Erro")}
    })

    const handleTranscricao  = () => {
        if(text){
            transcreverTexto({text});
        }
    }
    console.log(text);
    return ( 
        <Container>
            <Header></Header>

            <Input 
            type="text" 
            placeholder="Escreva aqui..."
            value={text}
            onChange={(e) => setText(e.target.value) }
            ></Input>

            <Botao1 onClick={handleTranscricao} disabled={isLoading}>
                {isLoading ? "Transcrevendo..." : "Transcrever"}
            </Botao1>

            <Transcrito>
                {isError && "Erro na transcrição"}
                {data ? data.resultado : "Tradução..."}
            </Transcrito>
            <Botao2>Voltar</Botao2>
        </Container>
    )
}