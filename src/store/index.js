import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import thunk from 'redux-thunk';
import DevTools from 'containers/DevTools';

import reducers from 'reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, thunk),
    DevTools.instrument()
  )
);

export default store;
