import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CadastroUsuario: undefined;
  CadastroNota: undefined;
  ListarNotas: undefined;
  AlterarNota: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'ListarNotas'>;

type AlterarNotaProps = NativeStackScreenProps<RootStackParamList, 'AlterarNota'>;

export type { RootStackParamList, 
  HomeProps, 
  LoginProps,
  CadastroUsuarioProps,
  CadastroNotaProps,
  ListarNotasProps,
  AlterarNotaProps
};
