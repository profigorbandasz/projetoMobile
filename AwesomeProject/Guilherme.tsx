import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
} from 'react-native';

const bolso = {
    uri: '',
    width: 64,
    height: 64,
  };
const Guilherme = () => {
    const [minhaString,setText ] = useState('');
    return (
        <>
             <View>
      <Text>{minhaString}</Text>
      <TextInput
        placeholder="Digite algo aqui..."
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10}}
         onChangeText={newText => setText(newText)}
    
    defaultValue={minhaString}
      />
      
    </View>
    <View>
    <Text style={{padding: 10, fontSize: 42}}>
        {minhaString }
      </Text>
    </View>

    <ScrollView>
    <Image source={bolso} />
    <Image source={bolso} />
    <Image source={bolso} />
    <Image source={bolso} />
    </ScrollView>
    </>
    );
}

export default Guilherme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});