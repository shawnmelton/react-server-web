import AboutUs from '../pages/aboutUs/component'
import Home from '../pages/home/component'
import NotFound from '../pages/notFound/component'
import React from 'react'
import ROUTES from '../../constants/routes'

const template = (component) => {
    return (
        <div>
            { component.props.currentRoute === ROUTES.HOME ? <Home /> : '' }
            { component.props.currentRoute === ROUTES.ABOUT_US ? <AboutUs /> : '' }
            { component.props.currentRoute === ROUTES.NOT_FOUND ? <NotFound /> : '' }
        </div>
    )
}

export default template