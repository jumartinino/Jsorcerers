import React from "react";
import { Text } from 'react-native';
import { 
    CommentaryDiv,
    CommentarySections,
    DivisionBar
} from "./styles";


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