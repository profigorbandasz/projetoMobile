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
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import Ex1 from './Ex1';
import Ex2 from './Ex2';


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
     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF'
  },
});
