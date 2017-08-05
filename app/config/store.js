import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;