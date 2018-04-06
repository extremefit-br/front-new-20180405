import React from 'react'

export default props => {
    console.log(props)
    if (props.test) {
        return props.children
    } else {
        return false
    }
}