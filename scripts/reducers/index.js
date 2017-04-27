import { combineReducers } from 'redux';
import  { routerReducer } from 'react-router-redux';

import unitTypes from './unitTypes';

const rootReducer = combineReducers({ unitTypes, routing: routerReducer });

export default rootReducer;
