import React from 'react'


const FormSelect = ({ children, ...props }) => (
    <select {...props}>
        {children}
    </select>
)

export default FormSelect