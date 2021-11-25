import React from "react";
import { Image, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

import {
    PageDiv,
    InputArea,
    InputField,
    InputDiv,
    SectionDiv,
    SectionTitles,
    RegisterButton,
    RegisterButtonText,
} from './styles';

import api from "../../services/api";

export default function Login() {

    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });
    const navigation = useNavigation();

    const onSubmit = (data: FormData) => {
        console.log(data);
        data.data_nasc = data.data_nasc.replaceAll('/','-');

        function FormataStringData(data) {
            var dia  = data.split("-")[0];
            var mes  = data.split("-")[1];
            var ano  = data.split("-")[2];
          
            return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
        }

        data.data_nasc = FormataStringData(data.data_nasc);

        api.post('/users', data).then(response => {
            alert('Cadastro feito com sucesso!');
            navigation.navigate('login')
        },
        (error) => {console.log(data.data_nasc)})
    }

    const validAddress = new RegExp(
        "[A-Za-z0-9'\.\-\s\,]"
     );

    interface FormData {
        nome: string;
        email: string;
        password: string;
        confirmPassword: string;
        data_nasc: string;
        endereco: string;
    }

    return (
        <PageDiv>
            <Image 
            style= {{width: '200px', height: '150px'}}
            source={require('../../assets/cadastro.png')}
            />
            <InputArea>

                <SectionDiv>
                    <SectionTitles> Dados Pessoais </SectionTitles>
                </SectionDiv>

                {/*Input de nome*/}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputField
                                placeholder='Nome'
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'O nome é obrigatório.',
                        }}
                        name='name'
                        defaultValue=''
                    />
                    {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                </InputDiv>

                {/*Input de endereço*/}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputField
                                placeholder='Endereço'
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'O nome é obrigatório.',
                            pattern: {
                                value: validAddress ,
                                message: 'Endereço inválido.'
                            }
                        }}
                        name='endereco'
                        defaultValue=''
                    />
                    {errors.endereco && <Text style={{ color: 'red' }}>{errors.endereco.message}</Text>}
                </InputDiv>

                {/* Input data de aniversário */}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInputMask
                                style={{
                                    border: '2px #58692E solid',
                                    borderRadius: 10,
                                    width: '100%',
                                    height: 50,
                                    paddingLeft: 20
                                }}
                                placeholder='DD/MM/YYYY'
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'A data de nascimento é obrigatória.',
                        }}
                        name='data_nasc'
                        defaultValue=''
                    />
                    {errors.data_nasc && <Text style={{ color: 'red' }}>{errors.data_nasc.message}</Text>}
                </InputDiv>

                <SectionDiv>
                    <SectionTitles> Detalhes da Conta </SectionTitles>
                </SectionDiv>

                {/*Input de email*/}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputField
                                placeholder='E-mail'
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'O e-mail é obrigatório.',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Formato de e-mail inválido.'
                            }
                        }}
                        name='email'
                        defaultValue=''
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                </InputDiv>

                {/*Input de senha*/}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputField
                                placeholder='Senha'
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'A senha é obrigatória.',
                        }}
                        name='password'
                        defaultValue=''
                    />
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                </InputDiv>

                {/*Input confirmar senha*/}
                <InputDiv>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputField
                                placeholder='Confirmar Senha'
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'Confirmar senha é obrigatório.',
                            validate: {
                                comparePassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || 'Senhas diferentes';
                                }
                            }
                        }}
                        name='confirmPassword'
                        defaultValue=''
                    />
                    {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}
                </InputDiv>
            </InputArea>

            <RegisterButton onPress={handleSubmit(onSubmit)}>
                <RegisterButtonText>Cadastrar</RegisterButtonText>
            </RegisterButton>
        </PageDiv>
    )
}
