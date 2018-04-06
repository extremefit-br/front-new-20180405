import React from 'react'



class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        const value = event.target.value
        const name = event.target.name

        this.props.onChange(name, value, false)
        this.setState({ error: '' })
    }

    render() {
        const { error } = this.state
        const { className, ...props } = this.props

        return (
            <React.Fragment>
                <input
                    {...props}
                    className={className}                    
                    onChange={this.validate} />

            </React.Fragment>
        )
    }
}

export default FormInput