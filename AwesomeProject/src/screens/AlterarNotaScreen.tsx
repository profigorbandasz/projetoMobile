import { AlterarNotaProps} from "../types";
import TelaAlterarNota from "../layouts/TelaAlterarNota";

const AlterarNotaScreen = ({ navigation, route }: AlterarNotaProps) => {
    return (
        <TelaAlterarNota navigation={navigation} route={route} />
    );
};

export default AlterarNotaScreen;