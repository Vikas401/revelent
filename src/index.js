import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { configStore } from './app/store/configStore';
import { loadEvent } from './features/event/eventActions';


const store = configStore();
store.dispatch(loadEvent())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <ReduxToastr 
    possition='bottom-right'
    transitionIn='fadeIn'
    transitionOut= 'fadeOut'
    />
    <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

