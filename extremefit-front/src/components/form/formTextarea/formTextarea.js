import React from 'react'


const FormTextarea = ({ children, ...props }) => (
    <textarea {...props}>
        {children}
    </textarea>
)

export default FormTextarea