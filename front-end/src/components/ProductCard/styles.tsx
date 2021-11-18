import styled from "styled-components/native";

export const ProductDiv = styled.View `
    width: 100%;
    display: flex;
    justify-Content: center;
    align-Content: center;
    flex-Direction: column;
    flex-Wrap: wrap;
`;

export const ProductContainer = styled.View `
    width: 90%;
    height: 25vh;
    display: flex;
    flex-Direction: row;
    justify-Content: space-around;
    align-Content: center;
    background-Color: red;
    margin: 12px 0;
`;

export const ProductPhoto = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-Top: auto;
    margin-Bottom: auto;
    width: 45%;
`;

export const ProductDescriptionDiv = styled.View `
    display: flex;
    width: 55%;
    justify-Content: space-around;
    flex-Wrap: wrap;
    padding: 10px 0;
`;

export const ProductTitle = styled.Text `
    font-size: 18px;
`;

export const ProductRating = styled.Text `
    display: flex;
    flex-direction: row;
    font-size: 16px;
`;

export const ProductPrice = styled.Text `
    font-size: 16px;
`;

export const ProductDescription = styled.Text `
    font-size: 14px;
`;