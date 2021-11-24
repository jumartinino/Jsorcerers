import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'; 
import { createContext, useEffect, useState } from 'react';

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

export const AuthContext = createContext<Data>({} as Data);

const [authorization, setAuthorization] = useState('');
const [checkLogIn, setcheckLogIn] = useState(false);

const AuthProvider =(props:any)=>{

const user_token= async(){
    let token ='';
    try{
        const value=await AsyncStorage.getItem ('token');
        if(value !== null){
            token = 'Bearer '.concat(value);
        }
    }   catch(e){
        console.log('Sem token')  
    }
}    

    return(
        <AuthContext.Provider value =  {{token: authorization, setToken: setAuthorization, signed: checkLogIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;