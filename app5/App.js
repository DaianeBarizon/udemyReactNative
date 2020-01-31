
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
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#B6B6B6',
                },
            },
        },
        Clientes: {
            screen: ScreenCliente,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#99A636',
                },
            },
        },
        Empresa: {
            screen: ScreenEmpresa,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
            },
        },
        Serviços: {
            screen: ScreenServico,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#18B8C2',
                },
            },
        },
        Contato: {
            screen: ScreenContato,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#44BD7D',
                },
            },
        },
    })
);

export default Routes;