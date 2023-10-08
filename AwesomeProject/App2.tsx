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

const App2 = () => {
    return (
        <>
            <Ex1 titulo={'teste'}></Ex1>
            <Ex2/>
            <Ex3/>
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
  