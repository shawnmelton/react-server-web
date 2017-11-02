import { Helmet } from 'react-helmet';
import React from 'react'

const template = (component) => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
                <link rel="canonical" href="https://www.example.com" />
            </Helmet>
            <h1>Home Page Found</h1>
        </div>
    )
}

export default template