import { useState, useEffect } from "react";
import {
    Alert, Pressable, FlatList, StyleSheet, Text, TextInput,
    View
} from "react-native";

import firestore from "@react-native-firebase/firestore";
import { ListarNotasProps } from "../types";
import { INotas } from "../models/INotas";


export default ({ navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INotas[];

                setNotas(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function alterarNota(id: string){
        navigation.navigate("AlterarNota", {id: id, palavra: 'abobrinha'})
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de Notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.titulo}</Text>
                                <Text>{info.item.descricao}</Text>
                            </View>
                            
                            <View style={styles.botao_alterar}>
                                <Pressable
                                    onPress={() => alterarNota(info.item.id)}>
                                        <Text style={{fontWeight:"bold", fontSize: 40}}>
                                            A
                                        </Text>
                                </Pressable>
                            </View>
                            
                            <View style={styles.botao_deletar}>
                                
                                <Pressable
                                    onPress={() => deletarNota(info.item.id)}>
                                        <Text style={{fontWeight:"bold", fontSize: 40}}>
                                            X
                                        </Text>
                                </Pressable>
                            </View>

                        </View>
                    );
                }}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar:{
        backgroundColor: 'red', 
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao_alterar:{
        backgroundColor: 'yellow', 
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
