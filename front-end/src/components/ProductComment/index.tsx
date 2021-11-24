import React from "react";
import { Text } from 'react-native';
import { 
    CommentaryDiv,
    CommentarySections,
    DivisionBar
} from "./styles";


export default function ProductCommentaty(){
    return(
        <CommentaryDiv>
            <DivisionBar/>
            <CommentarySections>Nome: blablablabla</CommentarySections>
            <CommentarySections>Pergunta: eu posso fritar ovo na minha tekpix??</CommentarySections>
            <CommentarySections>Resposta: Sim, você pode fritar ovo na sua tekpix</CommentarySections>
        </CommentaryDiv>
    )
}