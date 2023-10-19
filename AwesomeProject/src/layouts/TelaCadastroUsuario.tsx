import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import auth from "@react-native-firebase/auth";

export default () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar(){
        setIsLoading(true);
        
        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => Alert.alert("Conta", "Cadastrado com sucesso"))
            .catch((error)=> console.log(error))
            .finally(()=> setIsLoading(false));
        
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => {setEmail(text)}} />
            <Text>Senha</Text>
            <TextInput 
                style={styles.caixa_texto}
                onChangeText={(text) => {setSenha(text)}} />
            <Pressable
                style={styles.botao}
                onPress={cadastrar}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
    }
});