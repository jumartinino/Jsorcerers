import React from "react";
import { Image, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

import {
    PageDiv,
    InputArea,
    InputField,
    InputDiv,
    SectionDiv,
    SectionTitles,
    RegisterButton,
    RegisterButtonText,
} from './styles.tsx';

export default function Login() {

    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    const validAddress = new RegExp(
        "[A-Za-z0-9'\.\-\s\,]"
     );

    interface FormData {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        birthDate: string;
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
                        name='address'
                        defaultValue=''
                    />
                    {errors.address && <Text style={{ color: 'red' }}>{errors.address.message}</Text>}
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
                        name='birthDate'
                        defaultValue=''
                    />
                    {errors.birthDate && <Text style={{ color: 'red' }}>{errors.birthDate.message}</Text>}
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