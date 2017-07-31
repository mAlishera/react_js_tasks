/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import {  Switch, matchPath, Route, Router } from 'react-router-dom';

import history from 'helpers/history';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';

import MainLayout from 'components/layouts/MainLayout';
import DevTools from 'containers/DevTools';
import _ from 'lodash';

function historyCb(location) {
  _.map(
    routes,
    route => {
      const match = matchPath(location.pathname, route);
      if (match) {
        const state = { location, params: match.params, routes };
        return prepareData(store, state);
      }
    }
  );
  return true;
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout>
        <Switch>
          {
            _.map(
              routes,
              (route, i) => (
                <Route key={i} exact={route.exact} path={route.path} component={route.component} prepareData={route.prepareData} />
              )
            )
          }
        </Switch>
      </MainLayout>
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
