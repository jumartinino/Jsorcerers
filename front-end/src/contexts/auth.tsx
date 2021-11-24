import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'; 
import { createContext, useEffect, useState } from 'react';

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

export const AuthContext = createContext<Data>({} as Data);

const AuthProvider =(props:any)=>{
    return(
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;