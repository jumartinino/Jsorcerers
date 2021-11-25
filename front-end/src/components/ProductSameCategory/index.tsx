import React from "react";
import { 
    SameCategoryDiv, 
    ProductDiv, 
    ProductImage,
    ProductTitle,
    ProductPrice
 } from "./styles";

export default function SameCategory(){
    return(
        <SameCategoryDiv>
            <ProductDiv>
                <ProductImage source={require('../../assets/Haikyu.jpg')} />
                <ProductTitle>Haikyu! Vol. 02 - Big</ProductTitle>
                <ProductPrice>R$ 34,99</ProductPrice>
            </ProductDiv>
            <ProductDiv>
                <ProductImage source={require('../../assets/Haikyu.jpg')} />
                <ProductTitle>Haikyu! Vol. 02 - Big</ProductTitle>
                <ProductPrice>R$ 34,99</ProductPrice>
            </ProductDiv>
        </SameCategoryDiv>
    )
}