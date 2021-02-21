import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { MainPage, ProjectPage, ToyPage, AboutPage } from './pages';

const App = () => {
	return (
		<div id="app">
			<Router>
				<AnimatedRouter />
			</Router>
		</div>
	);
};

const AnimatedRouter = () => {
	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames="frame" timeout={500}>
				<Switch location={location}>
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
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;