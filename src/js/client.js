import appService from './services/app'
import 'babel-polyfill'
import browser from './services/browser'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root/component'
import store from './redux/store'

appService.setClientRenderer()
browser.setRoute()

ReactDOM.hydrate((
    <Provider store={store}>
        <Root />
    </Provider>
), document.getElementById('root'))