/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import {  Switch, matchPath, Route } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

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
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          {
            routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} prepareData={route.prepareData} />
            ))
          }
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
