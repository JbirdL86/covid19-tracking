import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './tracker/tracker';

const countriesReducer = combineReducers({
  countries: reducer,
});

const store = createStore(
  countriesReducer,
  applyMiddleware(thunk, logger),
);

export default store;
