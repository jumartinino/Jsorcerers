import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

export default function Form() {
    const [page, setPage] = useState(1);

    function goNextPage() {
        if(page === 4) return;
        setPage(page => page + 1);
    }
    function goPreviousPage() {
        if(page === 1) return;
        setPage(page => page - 1);
    }

    return (
        <View>
            <View> Pagina {page}</View>

            
            {page === 1 && OnboradingOne}
            {page === 2 && OnboradingTwo}
            {page === 3 && OnboradingThree}
            {page === 4 && OnboradingFour}
            
            {page !== 1 && <TouchableOpacity onPress={goPreviousPage}> Previous Form </TouchableOpacity>}
            {page !== 4 && <TouchableOpacity onPress={goNextPage}> Next Form </TouchableOpacity>}
            {page === 4 && <TouchableOpacity onPress={goNextPage}> Submit </TouchableOpacity>}
        </View>
    )
};

function OnboradingOne(){
    return(
        <View>estou na pagina 1</View>
    )
};
function OnboradingTwo(){
    return(
        <View>estou na pagina 2</View>
    )
};
function OnboradingThree(){
    return(
        <View>estou na pagina 3</View>
    )
};
function OnboradingFour(){
    return(
        <View>estou na pagina 4</View>
    )
}