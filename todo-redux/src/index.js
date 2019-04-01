import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import reducer from './reducers/index.js';
import { createLogger } from 'redux-logger';

// 任何对state的改变之前都会顺序执行中间件
let store =createStore(reducer, applyMiddleware(createLogger()));
ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)