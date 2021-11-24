import styled from "styled-components/native";

export const SameCategoryDiv = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
`;

export const ProductDiv = styled.TouchableOpacity`
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductImage = styled.Image`
    height: 50%;
    width: 60%;
    object-fit: contain;
`;

export const ProductTitle = styled.Text`
    margin-top: 20px;
    font-size: 20px
`;
    
export const ProductPrice = styled.Text`
    margin-top: 5px;
    font-size: 18px
`;