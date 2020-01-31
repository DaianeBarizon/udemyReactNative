
//Importando Página Principal
import ScreenMain from './src/components/ScreenMain';

//Importando componentes 
import ScreenCliente from './src/components/ScreenCliente';
import ScreenEmpresa from './src/components/ScreenEmpresa';
import ScreenServico from './src/components/ScreenServico';
import ScreenContato from './src/components/ScreenContato';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: ScreenMain,
        },
        Clientes: {
            screen: ScreenCliente,
        },
        Empresa: {
            screen: ScreenEmpresa,
        },
        Serviços: {
            screen: ScreenServico,
        },
        Contato: {
            screen: ScreenContato,
        },
    })
);

export default Routes;