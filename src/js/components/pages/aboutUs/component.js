import browser from '../../../services/browser'
import { connect } from 'react-redux'
import React from 'react'
import ROUTES from '../../../constants/routes'
import template from './jsx'

export class AboutUs extends React.Component {
    onButtonClick(e) {
        e.preventDefault()
        browser.navigate(ROUTES.HOME, '/')
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const AboutUsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutUs)

export default AboutUsContainer