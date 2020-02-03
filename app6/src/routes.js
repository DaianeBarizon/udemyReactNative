import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Importando Página Principal
import Main from './components/Main';

//Importando Componentes 
import Jogo from './components/Jogo';
import Outros from './components/Outros';
import Sobre from './components/Sobre';

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Main,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#408560',
                },
                title: 'Cara ou Coroa',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            },
        },
        Jogo: {
            screen: Jogo,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#408560',
                },
            },
        },
        Outros: {
            screen: Outros,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#408560',
                },
            },
        },
        Sobre: {
            screen: Sobre,
            navigationOptions: {
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#408560',
                },
            },
        },
    })
);

export default Routes;