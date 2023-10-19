import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
};

//HomeScreen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

//LoginScreen
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


export type { RootStackParamList, 
  HomeProps, 
  LoginProps};