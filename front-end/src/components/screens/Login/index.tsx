import React = require('react');
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Image, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import COLORS from '../../Cores';

const Login= ()=>{
    const {control, handleSubmit, formState:{errors}, getValues} = useForm({mode:'onTouched'});

    const onSubmit = (data: FormData) => {
        console.log(data)
    }
        
    interface FormData {
        email: string;
        senha: string;
    }

    return(
    <SafeAreaView>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
      <ScrollView>

             <View style={styles.header}>
              <Image style={styles.image} source={require('../../Images/LogoPlaca.png')}/>
             </View>

        <View style={styles.block}>

            {/* input de email */}
            <View>
            <Text style={styles.title}>E-mail</Text>
                {/* componente controlador */}
                <Controller
                    // o control referencia ao name 
                    control={control}
                    render={({field:{onBlur, onChange, value}}) => (
                        <TextInput style={styles.input}    
                            placeholder='  Digite o seu email'
                            autoCompleteType='email'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        
                        required: 'O e-mail é obrigatório.',
                        pattern: {
                            value: /^\S+@\S+$/i,  
                            message: 'O Formato do e-mail é inválido.'
                         },
                    }}
                    name='email'
                    defaultValue=''
                />

                {errors.email && <Text style={{color:'red', marginLeft: 10 
}}>{errors.email.message}</Text>}    
            </View>


            {/* input de senha */}
            <View>
              <Text style={styles.title}>Senha</Text>

                <Controller 
                    control={control}
                    render={({field:{onBlur, onChange, value}}) => (
                        <TextInput style={styles.input}
                              placeholder ='  Digite a sua senha'
                              secureTextEntry
                              onBlur={onBlur}
                              autoCompleteType='password'
                              autoCorrect={false}
                              textContentType='password'
                              onChangeText={(value:any) => onChange(value)}
                              value={value}
                        />  
                    )}
                    rules={{ 
                      required: 'A senha é obrigatória.'
                    }}
                    name='password'
                    defaultValue=''
                />
                {errors.password && <Text style={{ color: 'red', marginLeft: 10  }}>{errors.password.message}</Text>}

                    
            </View>
            <TouchableOpacity>
              <View style={styles.button} 
                onPress={() => navigator.navigate('Register')}>
                <Text style={styles.buttonTitle }>Entrar</ Text>
              </View>
            </TouchableOpacity>

            <View style={styles.createAccount}>
              <Text 
                style={styles.btnRegister}>Não tem uma conta?
              </Text>
              <TouchableOpacity 
                style={styles.btnRegister} 
                onPress={() => navigator.navigate('Register')}>
                <Text 
                  style={styles.btnRegisterText}> Crie aqui.
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )   
}

const styles = StyleSheet.create({
    header:{
    alignItems: 'center',
    marginTop:0,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  image:{
    width:180,
    height: 100,

  },
  button: {
    height: 40,
    width: "100%",
    backgroundColor: COLORS.lightGreen,
    marginBottom: 10,
    marginTop: 50,
    borderRadius: 7
  },
  buttonTitle:{
    textAlign: 'center',
    marginTop: 5,
    color: COLORS.darkBrown,
    fontSize: 20,
    fontWeight:'bold'
  },
  title: {
    color: COLORS.darkBrown, 
    fontSize: 20,
    fontWeight:'bold',
    marginLeft: 10
  },
  block:{
    paddingHorizontal: 20,

  },
  createAccount:{
    flexDirection:'row',
    justifyContent:'center',
  },
  btnRegister:{
    color: COLORS.darkGreen,
    fontWeight: 'bold'
  },
  btnRegisterText:{
    color: COLORS.darkBrown,
    fontWeight: 'bold'
  },
  input:{
    height: 40,
    width:'100%',
    borderColor: COLORS.lightGreen,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10, 
    borderRadius: 5 
  }
});


export default Login;