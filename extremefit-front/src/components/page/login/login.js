import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import FaUser from 'react-icons/lib/fa/user'
import FaLock from 'react-icons/lib/fa/lock'
import LogoVidaSaudavel from './logo_vida_saudavel.png'
import './login.css'
import { connect } from 'react-redux'
import { logaUsuario } from '../../../action/login.js'
import decode from 'jwt-decode'


class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { isInvalid: false }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		console.log('enviar dados para API', {
			email: this.email,
			senha: this.senha
		})
		this.props.logaUsuario(event, this.email, this.senha)
	}

	handleChange(name, value, isInvalid) {
		this[name] = value
		this.setState({ isInvalid })
	}

	render() {
		const { usuario, logaUsuario } = this.props

		return (
			usuario ? (
				<Redirect to="/" />
			) : (
				<Container className="login">
					<div>
						<img className="align-center" src={LogoVidaSaudavel} alt="" />
					</div>
					<Form onSubmit={this.handleSubmit}>
						<div className="box-campo align-center">
							<FaUser />
							<Input 
								className="login__form-input" 
								type="email"
								name="email" 
								placeholder="E-mail" 
								autoComplete="email" 
								aria-label="email"
								onChange={this.handleChange}/>
						</div>
						<div className="box-campo align-center">
							<FaLock />
							<Input 
								className="login__form-input" 
								type="password" 
								name="senha"
								placeholder="Senha" 
								autoComplete="current-password" 
								aria-label="senha" 
								onChange={this.handleChange}/>
						</div>
						{/* <a className="link-esqueci-senha align-center">Esqueci minha senha</a> */}
						<Button className="login-botao align-center">Login</Button>
					</Form> 
				</Container>
			)
		)
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario
})

const mapDispatchToProps = dispatch => ({
	logaUsuario: (event, email, senha) => {
		event.preventDefault()
		dispatch(logaUsuario(email, senha))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)