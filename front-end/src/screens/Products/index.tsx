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
    StoreNameNRating,
    StoreName,
    StoreRating,
    StoreButton,
    SectionTitle,
    SeeMore,
    Review
} from './styles'

import ProductComment from '../../components/ProductComment'
import ProductReviews from '../../components/ProductReviews'
import ProductSameCategory from '../../components/ProductSameCategory'

export default function Products(){
    return(
        <View style={{flex: 1, alignItems: "center"}}>
            <Product>
                <Image
                    source={require('../../assets/Jujutsu.png')}
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
                <StoreProfilePic source={require('../../assets/Rafael.png')}/>
                <StoreNameNRating>
                    <StoreName>Rafael</StoreName>
                    <StoreRating>4*</StoreRating>
                </StoreNameNRating>
                <StoreButton>Ver Loja</StoreButton>
            </StoreDiv>

            <SectionTitle>Perguntas e Respostas</SectionTitle>
            
            {/* {Data.map = (data) => {
                <ProductComment comentario={data}/>
            }} */}

            <ProductComment name={'Rodrigo'} question={'Ele está lacrado?'} answer={'Sim, ele é novo'}/>
            <ProductComment name={'Gustavo'} question={'Pode vender 5 de uma vez só?'} answer={'Não, só uma por compra'} />
            
            <SeeMore>Ver mais</SeeMore>

            <SectionTitle>Avaliações</SectionTitle>

            <Review>Avaliar</Review>

            {/* {Data.map = (data) => {
                <ProductReviews comentario={data}/>
            }} */}

            <ProductReviews name={'CARLOS'} commentary={'Excelente'} />
            <ProductReviews name={'LUCAS'} commentary={'Muito bom'} />

            <SeeMore>Ver mais</SeeMore>

            <SectionTitle>Produtos na mesma categoria</SectionTitle>

            <ProductSameCategory></ProductSameCategory>
        </View>
    )
}