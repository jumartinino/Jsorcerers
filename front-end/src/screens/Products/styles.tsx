import styled from "styled-components/native";

export const Product = styled.View`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const ProductTitle = styled.Text`
    margin-top: 10px;
    font-size: 30px;
`;

export const ProductRateNPrice = styled.View`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProductPrice = styled.Text`
    font-weight: bold;
    font-size: 26px;
`;

export const ProductDescription = styled.Text`
    font-size: 18px;
`;

export const BuyButton = styled.TouchableOpacity`
    margin-top: 10px;
    width: 90%;
    background-color: #A0AA60;
    border: 1px #A0AA60 solid;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const BuyText = styled.Text`
    font-size: 20px;
    color: #39280D;
`;

export const FavoritsNCommentariesDiv = styled.View`
    width: 60%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FavoritsNCommentaries = styled.TouchableOpacity`
    font-size: 24;
`;

export const StoreDiv = styled.View`
    width: 100%;
    margin-top: 20px;
    height: 100px;
    border: 2px #58692E solid;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const StoreProfilePic = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100;
`;

export const StoreButton = styled.TouchableOpacity`
    background-color: #A0AA60;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
`;

export const SectionTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 25px;
    color: #39280D;
`;

export const SeeMore = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    background-color: #A0AA60;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;