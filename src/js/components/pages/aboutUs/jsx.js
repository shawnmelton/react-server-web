import { Helmet } from 'react-helmet';
import React from 'react'

const template = (component) => {
    return (
        <div>
            <Helmet>
                <title>About Us Page</title>
                <link rel="canonical" href="https://www.example.com/about-us" />
            </Helmet>
            <h1>About Us Page Found</h1>
            <button onClick={(e) => { component.onButtonClick(e) }}>Go Home</button>
        </div>
    )
}

export default template