import { CadastroNotaProps, CadastroUsuarioProps, LoginProps } from "../types";
import TelaCadastroUsuario from "../layouts/TelaCadastroUsuario";
import TelaCadastroNota from "../layouts/TelaCadastroNota";

const CadastroNotaScreen = ({ navigation, route }: CadastroNotaProps) => {
    return (
        <TelaCadastroNota navigation={navigation} route={route} />
    );
};

export default CadastroNotaScreen;