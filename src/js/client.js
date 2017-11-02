import appService from './services/app'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root/component'
import store from './redux/store'

appService.setClientRenderer()

ReactDOM.render((
    <Provider store={store}>
        <Root />
    </Provider>
), document.getElementById('root'))