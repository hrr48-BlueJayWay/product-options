import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import App from './app.jsx';




ReactDOM.render(
<Router>
  <Route exact path="/">
    <Redirect to="/products/1" />
  </Route>
  <Route path="/products/:id">
    <App />
  </Route>
</Router>, document.getElementById("productOptionsApp"));