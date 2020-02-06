import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import reducers from './reducers/index';

const App = () => (
    //React se comunicando com o framework Redux
    //O Provider tem que englobar toda a aplicação
    //O createStore é para fazer comunicação com o Redux
    //O createStore espera receber os reducers para evoluir os estados da aplicação
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>
);

export default App;
