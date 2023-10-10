import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import {Cat, Dog} from './Cat';
import Cafe from './Cafe';
import PizzaTranslator from './PizzaTranslator';
import Guilherme from './Guilherme';
import Bernardo from './Teste';
import ListaFlat from './ListaFlat';
import ListaSection from './ListaSection';

const listaSection = [
  {title: 'A', data:[{key: 1, descricao: 'Ana'}, {key: 2, descricao: 'Zidane'}]},
  {title: 'B', data:[{key: 2, descricao: 'Bruno'}]},
  {title: 'C', data:[{key: 3, descricao: 'Carlos'}]},
  {title: 'D', data:[{key: 4, descricao: 'Douglas'}]},
  {title: 'E', data:[{key: 5, descricao: 'Elio'}]},
  {title: 'F', data:[{key: 6, descricao: 'Fábio'}]},
];

const lista = [
  {key: 1, descricao: 'teste'},
  {key: 2, descricao: 'teste2'},
  {key: 3, descricao: 'teste3'},
  {key: 4, descricao: 'teste4'},
  {key: 4, descricao: 'abobrinha'}
];



const App2 = () => {
    return (
        <>
            <Ex1 titulo="Teste"/>
            <Ex2/>
            <Ex3/>
           <ListaFlat array={lista}/>
           <ListaSection array={listaSection}/>
        </>
    );
}

export default App2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    },
  });
  