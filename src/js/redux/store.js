import { createStore } from 'redux'
import reducer from './reducer'

const getPreloadedState = () => {
    if (typeof window === 'object' && '__PRELOADED_STATE__' in window) {
        const preloadedState = window.__PRELOADED_STATE__
        delete window.__PRELOADED_STATE__
        return preloadedState
    }

    return {}
}

const store = createStore(reducer, getPreloadedState())
export default store