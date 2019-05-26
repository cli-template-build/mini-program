import {createStore, combineReducers} from 'redux';
import {createConnect} from '../reduxWrapper/connect';
import count from './count';

const reducers = combineReducers({
  count,
});

const store = createStore(reducers);

export const connector = createConnect(store);

export default store;
