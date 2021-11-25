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

            <ProductCard title={'Jujutsu Kaisen - Batalha De Feiticeiros - 10'} rating={'4*'} price={20.33} description={'Para reaver seu corpo físico, Mekamaru, ou melhor, Kokichi Muta, se alia aos espíritos amaldiçoados. Mas o acordo entre eles é quebrado e o estudante se vê enfrentando Mahito. Será que Muta conseguirá escapar da morte com sua técnica secreta? Enquanto isso, em 31 de outubro, uma cortina recai sobre um distrito de Tokyo, marcando o início do "Incidente em Shibuya".'}/>
        </View>
    );
}