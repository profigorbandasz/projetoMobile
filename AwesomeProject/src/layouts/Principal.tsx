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

const lista = [
  { key: 1, descricao: 'teste' },
  { key: 2, descricao: 'teste2' },
  { key: 3, descricao: 'teste3' },
  { key: 4, descricao: 'teste4' }
];

const listaSection = [
  { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
  { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
];


export default ({ navigation, route }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalhes')} />
      <Button
        title="Cadastrar Nota"
        onPress={() => navigation.navigate('CadastroNota')} />  
      <Button
        title="Listar Notas"
        onPress={() => navigation.navigate('ListarNotas')} />    
      <ExemploStylesText />
      <ExemploStylesView />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF'
  },
});
