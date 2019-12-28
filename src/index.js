import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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


ReactDOM.render(
    <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/questLog" component={QuestLog} />
        <Route exact path="/certifications" component={Certifications} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/subjectMatrix" component={SubjectMatrix} />
    </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
