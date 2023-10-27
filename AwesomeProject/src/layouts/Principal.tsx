import React, { ReactElement } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomeProps } from '../types';
import Pai from './ExemploCallback';


export default ({ navigation, route }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Listar Notas"
        color={'green'}
        onPress={() => navigation.navigate('ListarNotas')} />

      <Button
        title="Cadastrar Nota"
        onPress={() => navigation.navigate('CadastroNota')} />
     
      <Pai/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF'
  },
});
