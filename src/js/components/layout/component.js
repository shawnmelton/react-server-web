import React from 'react'
import { connect } from 'react-redux'
import template from './jsx'

export class Layout extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const LayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)

export default LayoutContainer