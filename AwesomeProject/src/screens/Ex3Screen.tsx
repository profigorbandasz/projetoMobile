import { CadastroUsuarioProps, Ex1Props, Ex2Props, Ex3Props, HomeProps, LoginProps } from "../types";


const Ex3Screen = ({ navigation, route }: Ex3Props) => {
    return (
        <Ex1 navigation={navigation} route={route} />
    );
};

export default Ex3Screen;