import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootComponent from './component/RootComponent'
import allReducers from './reducers'

const myStore = createStore(allReducers)

ReactDOM.render(
    <Provider store={myStore}>
        <RootComponent />
    </Provider>
    , document.getElementById('root')
)