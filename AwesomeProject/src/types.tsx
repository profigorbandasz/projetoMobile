import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CadastroUsuario: undefined;
  Detalhes: undefined;
  CadastroNota: undefined;
  ListarNotas: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'ListarNotas'>;


export type { RootStackParamList, HomeProps, LoginProps, CadastroUsuarioProps, CadastroNotaProps, ListarNotasProps};
