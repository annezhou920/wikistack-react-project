import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AddPage from './AddPage';
import WikiPages from './WikiPages';
import Layout from './Layout';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="/wiki" component={WikiPages} />
        <Route path="/wiki/add" component={AddPage} />
        <IndexRedirect to="/wiki" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
