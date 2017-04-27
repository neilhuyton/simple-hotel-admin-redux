import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

const defaultState = {
  unitTypes: []
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//export default store;
