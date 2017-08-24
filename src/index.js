import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
// import store from './redux/store/store';
import App from './containers/App';

import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'element-theme-default';

let store = createStore(reducer);

console.log(stote.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();