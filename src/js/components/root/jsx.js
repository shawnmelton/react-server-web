import Layout from '../layout/component'
import React from 'react'
import Router from '../router/component'

const template = (component) => {
    return (
        <Layout>
            <Router />
        </Layout>
    )
}

export default template