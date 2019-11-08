import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
// import Home from "./home";
import {App} from "./app";
// import { init }  from "./socket";
// import * as io from "socket.io-client";

//REDUX INSTALLATION BOILERPLATE
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './reducer';
import {Provider} from "react-redux";

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

//


let elem;
const userIsLoggedIn = location.pathname != "/welcome";

if (!userIsLoggedIn)
{
    elem = <Welcome />;

} else {
    // init(store);
    elem =  (
        <Provider store= {store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector('main'));
