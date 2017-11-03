import browser from '../../../services/browser'
import { connect } from 'react-redux'
import React from 'react'
import ROUTES from '../../../constants/routes'
import template from './jsx'

export class NotFound extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const NotFoundContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFound)

export default NotFoundContainer