import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/form" component={Form} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();