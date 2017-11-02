import React from 'react'
import { connect } from 'react-redux'
import template from './jsx'

export class Root extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer