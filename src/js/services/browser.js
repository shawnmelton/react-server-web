import createHistory from 'history/createBrowserHistory'
import logger from './logger'
import { ROUTES } from '../constants/routes'

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

        this._url = null
    }

    _setUrl(url) {
        this._url = url
    }

    navigate(url) {
        logger.log('Browser', 'Navigating to '+ url)

        this._setUrl(url)
        this._history.push(url)
    }
}

const browser = new Browser()

export default browser