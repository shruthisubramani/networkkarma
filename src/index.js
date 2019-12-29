import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import LaunchPage from './LaunchPage';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Resume from './Resume';
import Blog from './Blog';
import QuestLog from './QuestLog';
import Certifications from './Certifications';
import Contact from './Contact';
import SubjectMatrix from './SubjectMatrix';
import Header from './Header';
import Working from './Working';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={LaunchPage} />
            <Route component={Header} />
        </Switch>
        <Route path="/home" component={Working} />
        <Route exact path="/about" component={Working} />
        <Route exact path="/questLog" component={Working} />
        <Route exact path="/contact" component={Working} />
        <Route exact path="/subjectMatrix" component={Working} />
        {/* <Route path="/home" component={Resume} />
        <Route exact path="/about" component={Resume} />
        <Route exact path="/questLog" component={QuestLog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/subjectMatrix" component={SubjectMatrix} /> */}
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
