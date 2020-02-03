//Importando Página Principal
import Main from './src/components/Main';

//Importando Componentes 
import Jogo from './src/components/Jogo';
import Outros from './src/components/Outros';
import Sobre from './src/components/Sobre';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createAppContainer(
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

export default App;