import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage, ProjectPage, ToyPage, AboutPage } from './pages';

const App = () => {
    return (
        <div id="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/projects">
                        <ProjectPage />
                    </Route>
					<Route path="/toys">
                        <ToyPage />
                    </Route>
					<Route path="/about">
                        <AboutPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;