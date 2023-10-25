import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastroUsuarioScreen from "../screens/CadastroUsuarioScreen";
import Ex1Screen from "../screens/Ex1Screen";
import Ex2Screen from "../screens/Ex2Screen";
import Ex3Screen from "../screens/Ex3Screen";
import ListarNotasScreen from "../screens/ListarNotasScreen";
import CadastroNotaScreen from "../screens/CadastroNotaScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            
            <Stack.Screen name="CadastroNota" component={CadastroNotaScreen} />
            <Stack.Screen name="ListarNotas" component={ListarNotasScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;