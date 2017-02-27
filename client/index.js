import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AddPageContainer from './AddPageContainer';
import AddPage from './AddPage';
// import WikiPages from './WikiPages';
import WikiPagesContainer from './WikiPagesContainer';
import Layout from './Layout';
import { Provider } from 'react-redux';
import store from './store';
// import axios from 'axios';
import { loadPages } from './action-creators';

const onPagesEnter = function(){
  const thunk = loadPages();
  store.dispatch(thunk);
}



// const onAppEnter = function(){
//   axios.get('/api/wiki')
//     .then(res => res.data)
//     .then(pages => {
//       store.dispatch(receivePages(pages))
//     })
// }

// onEnter={onAppEnter}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout} onEnter={onPagesEnter}>
        <Route path="/wiki" component={WikiPagesContainer} onEnter={onPagesEnter} />
        <Route path="/wiki/add" component={AddPageContainer} onEnter={onPagesEnter} />
        <IndexRedirect to="/wiki" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
