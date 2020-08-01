import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/styles/App.scss";
import Header from './components/Header'
import Home from './Routes/Home';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById("root"));



