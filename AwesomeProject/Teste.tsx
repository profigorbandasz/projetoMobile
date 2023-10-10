import React from 'react';
import {Text, TextInput, View} from 'react-native';

type TestProps = {
    name: string;
  };
  
  const Test = (props: TestProps) => {
    return (
      <View>
        <Text style={{fontSize: 20}}>
            Olá Igor, eu sou o {props.name}!
        </Text>
        <TextInput/>
      </View>
    );
  };
  
  const Bernardo = () => {
    return (
      <View>
        <Test name="Be Mesquita" />
        <Test name="Bernardo" />
      </View>
    );
  };

  export default Bernardo;