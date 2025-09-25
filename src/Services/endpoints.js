import api from "./api";


export async function transcreverTexto({texto}) {
    const {data} = await api.post('/transcricao', {texto});
    return data;
}