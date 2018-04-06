import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addEspecialista } from '../../../action/especialista'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import If from '../../if/if.jsx'
import TiDelete from 'react-icons/lib/ti/delete'
import TiEdit from 'react-icons/lib/ti/edit'
import './especialista.css'


let pesquisa = false
class Empresas extends Component {
	
	constructor(props) {
		super(props);
		this.state = { isInvalid: false }
		// this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}

	handleSearch(event){
		console.log("teste evento pesquisa")
		pesquisa = true
		this.props.buscaEmpresas(event)
	}

	handleAdd(event){
		event.preventDefault()

		const especialista = {
			nome: this.nome,
			especialidade: this.especialidade,
			email: this.email,
			senha: this.senha

		}

		this.props.adicionaEspecialista(especialista)

	}

	handleChange(name, value, isInvalid) {
		this[name] = value
		this.setState({ isInvalid })
	}
	
	render() {	
		const { usuario } = this.props

		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Especialista</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="nome">Nome</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="nome"
									placeholder="Nome"
									aria-label="nome"
									onChange={this.handleChange} />
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="especialiadade">Especialidade</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="especialidade"
									placeholder="Especialidade"
									aria-label="especialidade"
									onChange={this.handleChange} />
							</div>
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="email">Email</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="email"
									placeholder="E-mail"
									aria-label="email"
									onChange={this.handleChange} />
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="senha">Senha</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="senha"
									placeholder="Senha"
									aria-label="senha"
									onChange={this.handleChange} />
							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao form-cadastro__botao--add" type="button" onClick={this.handleAdd}>Adicionar</Button></li>&nbsp;&nbsp;&nbsp; 
							{/* <li><Button className="form-cadastro__botao" type="button" onClick={this.handleSearch}>Pesquisar</Button></li> */}
							<li><Button className="form-cadastro__botao form-cadastro__botao--pesquisa">Remover</Button></li>
						</ul>
					</Form>

				
				</Container>
			</Fragment>
		) : (
			<Redirect to="/login" />
		) 
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario
})

const mapDispatchToProps = dispatch => ({
	adicionaEspecialista: (especialista) => {
		dispatch(addEspecialista(especialista))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Empresas)