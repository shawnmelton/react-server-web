import { APP_LOADED, APP_RENDERED } from '../constants/actionTypes'
import store from '../redux/store'

class AppRepo {
    setLoaded(loaded) {
        store.dispatch(reduxUpdateLoaded(renderer))
    }

    setRenderer(renderer) {
        store.dispatch(reduxUpdateRendered(renderer))
    }
}

const repo = new AppRepo()
export default repo

const reduxUpdateLoaded = loaded => {
    return {
        type: APP_LOADED,
        loaded: loaded
    }
}

const reduxUpdateRendered = renderer => {
    return {
        type: APP_RENDERED,
        renderer: renderer
    }
}