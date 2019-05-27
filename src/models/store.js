import {createStore, combineReducers} from 'redux';
import {createConnect} from 'redux2miniapp';
import count from './count';

const reducers = combineReducers({
  count,
});

const store = createStore(reducers);

export const connect = createConnect(store);
