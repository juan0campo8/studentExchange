import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Form from './Form';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/form" component={Form} />
  </BrowserRouter>,
  document.getElementById('root')
);