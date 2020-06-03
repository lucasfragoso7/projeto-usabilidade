import React from 'react';
import Routes from './routes';
import Background from './components/background';
import GlobalStyle from './styles/global';

function App() {
    return (
        <Background>
            <Routes />
            <GlobalStyle />
        </Background>
    );
}

export default App;
