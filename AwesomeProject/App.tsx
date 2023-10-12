import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './Principal';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

type StackParamList = {
  Home: undefined;
  Detalhes: undefined;
};

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

type HomeScreenNavigationProp = Props['navigation'];

type HomeScreenRouteProp = Props['route'];



const HomeScreen = ({ navigation, route }: Props) =>{
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' }}>
      <Principal navigation={navigation} route={route} />
    </View>
  );
};

const DetalhesScreen = () => {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' }}>
      <Text>Detalhes Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type {HomeScreenNavigationProp, HomeScreenRouteProp,Props};
export default App;