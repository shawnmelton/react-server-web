import app from '../reducers/app'
import { combineReducers } from 'redux'
import routes from '../reducers/routes'

export default combineReducers({
    app,
    routes
})