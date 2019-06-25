import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
// import store from './store/store';


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root'));

// serviceWorker.unregister();

import { PersistGate } from "redux-persist/lib/integration/react";
import configStore from "./store/store";
const { store, persistor } = configStore();


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
