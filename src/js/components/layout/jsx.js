import React from 'react'

const template = (component) => {
    return (
        <div>{ component.props.children }</div>
    )
}

export default template