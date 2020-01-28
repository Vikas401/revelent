import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configStore } from './app/store/configStore';
import { loadEvent } from './features/event/eventActions';


const store = configStore();
store.dispatch(loadEvent())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

