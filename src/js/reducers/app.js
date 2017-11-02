import { APP_LOADED, APP_RENDERED } from '../constants/actionTypes'
import { APP } from '../constants/appStates'

const defaultState = {
    loaded: false,
    renderer: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                loaded: action.loaded
            }

        case APP_RENDERED:
            return {
                ...state,
                renderer: action.renderer
            }

        default: return state
    }
}