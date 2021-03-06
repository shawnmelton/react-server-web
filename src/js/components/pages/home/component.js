import browser from '../../../services/browser'
import { connect } from 'react-redux'
import React from 'react'
import ROUTES from '../../../constants/routes'
import template from './jsx'

export class Home extends React.Component {
    onButtonClick(e) {
        e.preventDefault()
        browser.navigate(ROUTES.ABOUT_US, '/about-us')
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default HomeContainer