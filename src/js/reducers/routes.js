import { UPDATE_ROUTE } from '../constants/actionTypes'

const defaultState = {
    current: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ROUTE:
            return {
                ...state,
                current: action.route
            }

        default: return state
    }
}