import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from '@/components/App';
import reducer from '@/reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import '@/css/index.css';
import { hashHistory } from 'react-router-dom'
import RouteMap from '@/router/RouterMap'

// 任何对state的改变之前都会顺序执行中间件
let store =createStore(reducer, applyMiddleware(createLogger(), thunk));
ReactDom.render(
    <Provider store = {store}>
      <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)