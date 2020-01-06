import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/root';
import defaultStore from './model/initState';

let store = createStore(RootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>, 
    rootElement);
