import { Helmet } from 'react-helmet';
import React from 'react'

const template = (component) => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <h1>Page Not Found</h1>
        </div>
    )
}

export default template