import React from "react";
import { Text } from 'react-native';
import { 
    CommentaryDiv,
    CommentarySections,
    DivisionBar
} from "./styles";

// Recebe nome, pergunta e respota referente a determinado produto
export default function ProductCommentaty({name, question, answer}){
    return(
        <CommentaryDiv>
            <DivisionBar/>
            <CommentarySections>Nome: {name}</CommentarySections>
            <CommentarySections>Pergunta: {question}</CommentarySections>
            <CommentarySections>Resposta: {answer}</CommentarySections>
        </CommentaryDiv>
    )
}