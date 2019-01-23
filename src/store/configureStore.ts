import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './modules';
import { history } from './history';

const middlewares = [routerMiddleware(history), thunk];
const enhancer = applyMiddleware(...middlewares);
const reducerWithRouter = connectRouter(history)(rootReducer);

export const configureStore = () => createStore(reducerWithRouter, enhancer);
