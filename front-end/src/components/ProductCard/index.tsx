import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ProductDiv,
    ProductContainer,
    ProductPhoto,
    ProductDescriptionDiv,
    ProductTitle,
    ProductRating,
    ProductPrice,
    ProductDescription
} from './styles';

function ProductCard({ title, rating, price, description}) {
    const navigation = useNavigation();
    return (
        <ProductDiv onPress={()=> navigation.navigate('products')}>
            <ProductContainer>
                <ProductPhoto>
                    <Image
                        style={{ width: '70%', height: '200px' }}
                        source={require('../../assets/Jujutsu.png')} />
                </ProductPhoto>
                <ProductDescriptionDiv>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductRating>{rating}</ProductRating>
                    <ProductPrice>R${price}</ProductPrice>
                    <ProductDescription numberOfLines={2}>{description}
                    </ProductDescription>
                </ProductDescriptionDiv>
            </ProductContainer>
        </ProductDiv>
    )
}

export default ProductCard;