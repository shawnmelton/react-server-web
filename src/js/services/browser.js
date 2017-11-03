import createHistory from 'history/createBrowserHistory'
import logger from './logger'
import ROUTES from '../constants/routes'
import store from '../redux/store'
import { UPDATE_ROUTE } from '../constants/actionTypes'

class Browser {
    constructor() {
        this._init()
    }

    _init() {
        if (typeof window === 'object') {
            this._history = createHistory()
        } else {
            this._history = {
                location: {
                    pathname: '/'
                },
                urls: [],
                push: (url) => {}
            }
        }
    }

    navigate(route, url) {
        logger.log('Browser', 'Navigating to '+ url)

        store.dispatch(reduxUpdateRoute(route))
        this._history.push(url)
    }

    setRoute(urlPath = null) {
        const url = urlPath === null ? location.pathname : urlPath
        let currentRoute = null
        for (let route in ROUTES) {
            if (ROUTES[route].regex.test(url) && currentRoute === null) {
                currentRoute = ROUTES[route]
            }
        }

        if (currentRoute === null) {
            currentRoute = ROUTES.NOT_FOUND
        }

        store.dispatch(reduxUpdateRoute(currentRoute))
    }
}

const browser = new Browser()
export default browser

const reduxUpdateRoute = route => {
    return {
        type: UPDATE_ROUTE,
        route: route
    }
}