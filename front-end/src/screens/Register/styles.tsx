import styled from "styled-components/native";

export const PageDiv = styled.View`
    height: 100%;
    background-color: #f4f4f4;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const InputArea = styled.View `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputDiv = styled.View`
    width: 80%;
    margin-top: 20px;
`;

export const InputField = styled.TextInput`
    border: 2px #58692E solid;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    padding-left: 20px;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    margin: 5px;
    margin: 30px 0;
    background-color: #A0AA60;
    border: 1px #A0AA60 solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RegisterButtonText = styled.Text`
    color: #39280D;
    font-size: 18px;
    font-weight: 600;
`;

export const SectionDiv = styled.View`
    width: 80%;
`;

export const SectionTitles = styled.Text`
    margin-top: 20px;
    font-size: 26px;
    font-weight: 600;
    color: #39280D;
`;