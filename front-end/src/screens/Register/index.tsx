import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

export default function Login() {

    const { control, handleSubmit, formState: {errors}, getValues } = useForm({mode: 'onTouched'});

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    interface FormData {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        birthDate: string;
    }

    return (
        <View>
            <Text> Registrar </Text>

            {/*Input de nome*/}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            placeholder='Nome'
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    name='name'
                    defaultValue=''
                />
            </View>

            {/*Input de email*/}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
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
                {errors.email && <Text style={{ color: 'red'}}>{errors.email.message}</Text>}
            </View>

            {/*Input de senha*/}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            placeholder='Senha'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    name='password'
                    defaultValue=''
                />
            </View>

            {/*Input confirmar senha*/}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            placeholder='Confirmar Senha'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        validate: {
                            comparePassword: (value) => {
                                const {password} = getValues();
                                return password === value || 'Senhas diferentes';
                            }
                        }
                    }}
                    name='confirmPassword'
                    defaultValue=''
                />
                {errors.confirmPassword && <Text style={{ color: 'red'}}>{errors.confirmPassword.message}</Text>}
            </View>


            {/* Input data de aniversário */}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInputMask
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
                {errors.birthDate && <Text style={{ color: 'red'}}>{errors.birthDate.message}</Text>}
            </View>

            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text>Acessar</Text>
            </TouchableOpacity>

        </View>
    )
}