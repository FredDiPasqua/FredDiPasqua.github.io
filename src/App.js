import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/styles/App.scss";
import Layout from './components/Layout'
import Main from './components/Main';
import Projects from './components/Projects';
import Art from './components/Art'
import Colaborations from './components/Colaborations'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/art" component={Art} />
                <Route exact path="/colaborations" component={Colaborations} />
            </Switch>  
        </Layout>
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById("root"));



