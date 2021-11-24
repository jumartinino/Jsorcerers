import React, { useRef } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';

import { ProductTitle, ProductTitleDiv } from './styles';

import ProductBanner from '../../components/ProductBanner';
import ProductCard from '../../components/ProductCard';

export default function ProductsCategory() {

    return (
        <View>
            <ProductBanner />
            <ProductTitleDiv>
                <ProductTitle>Produtos:</ProductTitle>
            </ProductTitleDiv>

            {/* { Data.map(produtos => {
                    return(
                        <ProductCard
                            ProductTitle={produtos.title}
                            ProductRating={produtos.rating}
                            ProductPrice={produtos.price}
                            ProductDescription={produtos.description}
                        />
                    )
            })} */}

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </View>
    );
}