import styled from "styled-components/native";

export const BannerDiv = styled.View `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: red;
    height: 200px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    filter: blur(60%) grayscale(50%);
`;

export const BannerTitle = styled.View `
    font-size: 36px;
    color: white
`;