import React from "react";
import { ReviewsDiv, ReviewsSections, DivisionBar } from "./styles";


// Recebe nome e comentário sobre determinado produto comprado
export default function Reviews({name, commentary}){
    return(
        <ReviewsDiv>
            <DivisionBar/>
            <ReviewsSections>{name}</ReviewsSections>
            <ReviewsSections>{commentary}</ReviewsSections>
        </ReviewsDiv>
    )
}