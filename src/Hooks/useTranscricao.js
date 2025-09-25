
import {useMutation} from "@tanstack/react-query"
import { transcreverTexto } from "../Services/endpoints";


export function useTranscreverTexto({
    onSuccess = () => {}, 
    onError = () => {},
    } = {}){
    return useMutation({mutationFn: transcreverTexto, onSuccess, onError})
}