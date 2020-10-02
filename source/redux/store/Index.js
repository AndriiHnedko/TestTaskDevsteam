import { applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers/Index';
import thunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(thunk));

window.store = store;
export default store;
