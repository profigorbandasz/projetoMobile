import { CadastroUsuarioProps, Ex1Props, Ex2Props, HomeProps, LoginProps } from "../types";
import TelaCadastroUsuario from "../layouts/TelaCadastroUsuario";

const Ex2Screen = ({ navigation, route }: Ex2Props) => {
    return (
        <Ex1 navigation={navigation} route={route} />
    );
};

export default Ex2Screen;