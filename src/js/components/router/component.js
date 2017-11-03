import React from 'react'
import { connect } from 'react-redux'
import template from './jsx'

export class Router extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    currentRoute: state.routes.current
})

const mapDispatchToProps = dispatch => ({})

const RouterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Router)

export default RouterContainer