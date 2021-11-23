import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Product,
    ProductTitle,
    ProductRateNPrice,
    ProductPrice,
    ProductDescription,
    BuyButton,
    BuyText,
    FavoritsNCommentariesDiv,
    StoreDiv,
    StoreProfilePic,
    StoreButton
} from './styles.tsx'

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
                <Text style={{fontSize: 24}}>Favorite</Text>
                <Text style={{fontSize: 24}}>Comente</Text>
            </FavoritsNCommentariesDiv>

            <StoreDiv>
                <StoreProfilePic source={{uri: 'https://reactjs.org/logo-og.png'}}/>
                <Text>Rafael</Text>
                <StoreButton>Ver Loja</StoreButton>
            </StoreDiv>

            
        </View>
    )
}