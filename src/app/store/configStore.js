import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReduser';
import thunk from 'redux-thunk';

export const configStore = () => {

    const middlewares = [thunk];

    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(rootReducer, composeEnhancer);
    return store;
} 