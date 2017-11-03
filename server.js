import appService from './src/js/services/app'
import browser from './src/js/services/browser'
import express from 'express'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import React from 'react'
import reducer from './src/js/redux/reducer'
import { renderToString } from 'react-dom/server'
import Root from './src/js/components/root/component'
import store from './src/js/redux/store'
import templateService from './src/js/services/template'

const handleRender = (req, res) => {
    if (req.url === '/favicon.ico')
        return

    appService.setServerRenderer()
    browser.setRoute(req.url)

    const html = renderToString(
        <Provider store={store}>
            <Root />
        </Provider>
    )

    const helmet = Helmet.renderStatic()
    const preloadedState = store.getState()

    templateService
        .render('index.html', {
            html: html,
            links: helmet.link.toString(),
            meta: helmet.meta.toString(),
            preloadedState: JSON.stringify(preloadedState).replace(/</g, '\\u003c'),
            title: helmet.title.toString()
        }, content => {
            res.send(content)
        })
}

const app = express()
app.use('/css', express.static('dist/css'))
app.use('/js', express.static('dist/js'))
app.use(handleRender)
app.listen(3000)