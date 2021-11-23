import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native";
import {
    Product,
    ProductTitle,
    ProductRateNPrice,
    ProductPrice,
    ProductDescription,
    BuyButton,
    BuyText,
    FavoritsNCommentariesDiv,
    FavoritsNCommentaries,
    StoreDiv,
    StoreProfilePic,
    StoreButton,
    SectionTitle,
    SeeMore,
    Review
} from './styles'

import ProductComment from '../../components/ProductComment'
import ProductReviews from '../../components/ProductReviews'

export default function Products(){
    return(
        <View style={{flex: 1, alignItems: "center"}}>
            <Product>
                <Image
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{ width: '100%', height: 300 }}
                />
                <ProductTitle> Jujutsu Kaisen - Batalha de Feiticeiros - 10</ProductTitle>
                <ProductRateNPrice><ProductPrice>4*</ProductPrice>  <ProductPrice>R$ 20,23</ProductPrice></ProductRateNPrice>
                <ProductDescription>Para reaver seu corpo físico, Mekamaru, ou melhor, Kokichi Muta, se alia aos espíritos amaldiçoados. Mas o acordo entre eles é quebrado e o estudante se vê enfrentando Mahito. Será que Muta conseguirá escapar da morte com sua técnica secreta? Enquanto isso, em 31 de outubro, uma cortina recai sobre um distrito de Tokyo, marcando o início do "Incidente em Shibuya".</ProductDescription>
            </Product>

            <BuyButton>
                <BuyText> Compre Agora </BuyText>
            </BuyButton>

            <FavoritsNCommentariesDiv>
                <FavoritsNCommentaries>Favorite</FavoritsNCommentaries>
                <FavoritsNCommentaries>Comente</FavoritsNCommentaries>
            </FavoritsNCommentariesDiv>

            <StoreDiv>
                <StoreProfilePic source={{uri: 'https://reactjs.org/logo-og.png'}}/>
                <Text>Rafael</Text>
                <StoreButton>Ver Loja</StoreButton>
            </StoreDiv>

            <SectionTitle>Perguntas e Respostas</SectionTitle>
            
            {/* {Data.map = (data) => {
                <ProductComment comentario={data}/>
            }} */}

            <ProductComment/>
            <ProductComment/>
            
            <SeeMore>Ver mais</SeeMore>

            <SectionTitle>Avaliações</SectionTitle>

            <Review>Avaliar</Review>

            {/* {Data.map = (data) => {
                <ProductReviews comentario={data}/>
            }} */}

            <ProductReviews/>
            <ProductReviews/>

            <SeeMore>Ver mais</SeeMore>

            <SectionTitle>Produtos na mesma categoria</SectionTitle>
        </View>
    )
}