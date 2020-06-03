import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';
import EntregaAtividadePage from './pages/entregaAtividadePage';
import ListaAtividadesPage from './pages/listaAtividadesPage';
import MaterialDidaticoPage from './pages/materialDidaticoPage';
import PlanejamentoPage from './pages/planejamentoPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/chat" component={ChatPage} />
                <Route
                    path="/entrega-atividade"
                    component={EntregaAtividadePage}
                />
                <Route
                    path="/lista-atividade"
                    component={ListaAtividadesPage}
                />
                <Route
                    path="/material-didatico"
                    component={MaterialDidaticoPage}
                />
                <Route path="/planejamento" component={PlanejamentoPage} />
            </Switch>
        </BrowserRouter>
    );
}
