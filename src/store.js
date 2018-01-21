import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, logger());

const store = createStore( reducer, compose(middleware));

store.subscribe(
    ()=>console.log("store updated ", store.getState())
);

export default store;