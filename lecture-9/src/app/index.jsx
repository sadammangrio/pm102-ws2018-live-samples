import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'antd/dist/antd.css'
import Login from "./Login"


function intialState() {
    return {
        view: 'login'
    }
}

function reducer(state = intialState(), action) {
    return state
}

const store = createStore(reducer, composeWithDevTools())


ReactDom.render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('main')
)
