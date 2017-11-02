import React from 'react'
import { connect } from 'react-redux'
import template from './jsx'

export class Router extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const RouterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)

export default RouterContainer