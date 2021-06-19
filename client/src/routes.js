import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { CardsPage } from './pages/CardsPage';
import { CreatePage } from './pages/CreatePage';
import { MainPage } from './pages/MainPage';
import { TransletePage } from './pages/TransletePage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/translete" exact>
                    <TransletePage />
                </Route>
                <Route path="/cards" exact>
                    <CardsPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Redirect to='/main' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Route path="/main" exact>
                <MainPage />
            </Route>
            <Redirect to='/main' />
        </Switch>
    )
}