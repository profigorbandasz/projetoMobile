import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { HomeProps } from "../types";

export default ({ navigation, route }: HomeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_login}>
                <Text>Login</Text>
                <TextInput style={styles.caixa_texto}/>
                <Text>Senha</Text>
                <TextInput style={styles.caixa_texto}/>
                <Button 
                    title='Entrar'/>
            </View>

            <View style={styles.container_botoes}>
                <Button 
                    title='Cadastrar-se'/>
                <Button 
                    title='Esqueci a senha'/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF'
    },
    container_login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    }
});
