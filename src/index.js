import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'element-theme-default';

// Store, store 是保存数据的地方,看成一个容器,整个应用只能有一个Store
// Redux 提供 createStore 这个函数用来生成 Store
let store = createStore(reducer);

// 当前时刻的State可以通过, store.getState()来拿到
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();