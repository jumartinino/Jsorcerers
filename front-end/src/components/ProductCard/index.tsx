import React from 'react';
import { Image } from 'react-native';
import { ProductDiv, 
    ProductContainer, 
    ProductPhoto, 
    ProductDescriptionDiv, 
    ProductTitle, 
    ProductRating, 
    ProductPrice, 
    ProductDescription } from './styles';

function ProductCard() {
    return (
        <ProductDiv>
            <ProductContainer>
                <ProductPhoto>
                    <Image 
                    style= {{width: '70%', height: '25vh'}}
                    source={{
                        uri: 'https://i.picsum.photos/id/142/200/300.jpg?hmac=B08HyXonHhJPFpULUNgMfoCFGZqymUB3NhBxo3iWTnc',
                      }} />
                </ProductPhoto>
                <ProductDescriptionDiv>
                    <ProductTitle>Titulo do produto</ProductTitle>
                    <ProductRating>Avaliação 5*</ProductRating>
                    <ProductPrice>R$9999,99</ProductPrice>
                    <ProductDescription numberOfLines={2}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição
                    </ProductDescription>
                </ProductDescriptionDiv>
            </ProductContainer>
        </ProductDiv>
    )
}

export default ProductCard;