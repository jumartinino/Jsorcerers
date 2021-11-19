import React, { useRef } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import AnimatedHeader from '../components/ProductBanner';
import ProductCard from '../components/ProductCard';

export default function ProductsCategory() {
    const offset = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <AnimatedHeader animatedValue={offset} />
                <ScrollView
                    style={{ flex: 1, backgroundColor: 'white' }}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: 220,
                        paddingHorizontal: 20
                    }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width:'90%', margin: 10 }}>
                        <Text style={{ fontSize: 24 }}>Produtos:</Text>
                    </View>

                    {/* {  Data.map(produtos => {
                        return(
                            <ProductCard
                                ProductTitle={produtos.title}
                                ProductRating={produtos.rating}
                                ProductPrice={produtos.price}
                                ProductDescription={produtos.description}
                            />
                        )
                    })} */}
                    
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}