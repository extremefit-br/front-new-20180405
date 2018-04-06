import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addUnidade, getUnidade, atualizarUnidade } from '../../../action/unidade'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import If from '../../if/if.jsx'
import TiDelete from 'react-icons/lib/ti/delete'
import TiEdit from 'react-icons/lib/ti/edit'
import './unidades.css'
import decode from 'jwt-decode';
import Select from 'react-select';

let pesquisa = false
const unidade = {
	nomeUnidade: "",
	cidade: ""
}

class Unidades extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			value: '',
			isInvalid: false,
			selectedUnidade: {},
			unidade: unidade
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)

		this.editRow = this.editRow.bind(this)
		this.handleChangeDois = this.handleChangeDois.bind(this)
	}

	handleSearch(event) {
		pesquisa = true
		this.props.buscaUnidades(event)
	}

	editRow(id) {
		this.setState({ unidade: this.props.unidades.find(unidade => (unidade.id === id)) });
	}

	handleAdd(event) {
		event.preventDefault()

		let unidade = this.state.unidade;
		if (unidade.id == undefined || unidade.id == null) {
			return this.props.adicionaUnidade(unidade)
		}
		return this.props.atualizaUnidade(unidade)

	}

	handleChange(name, value, isInvalid) {
		let unidade = this.state.unidade;
		unidade.nomeUnidade = value;
		this.setState({ unidade: unidade });
	}

	handleChangeDois(name, value, isInvalid) {
		let unidade = this.state.unidade;
		unidade.cidade = value;
		this.setState({ unidade: unidade });
	}

	render() {
		const { usuario } = this.props
		
		let usuarioId = decode(localStorage.getItem('usuario'))

		// return usuario && (usuarioId.role == "Especialista" || usuarioId.role == "Admin" || usuarioId.role == "Sesi") ? (
		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Unidades Sesi</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="descricao">Nome Unidade</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="nomeUnidade"
									placeholder="Nome da Unidade"
									aria-label="nomeUnidade"
									onChange={this.handleChange}
									value={this.state.unidade.nomeUnidade}
								/>

								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="descricao">Cidade</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="cidade"
									placeholder="Cidade"
									aria-label="cidade"
									onChange={this.handleChangeDois}
									value={this.state.unidade.cidade}
								/>

							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao form-cadastro__botao--add" type="button" onClick={this.handleAdd}>Salvar</Button></li>&nbsp;&nbsp;&nbsp; 
							<li><Button className="form-cadastro__botao form-cadastro__botao--pesquisa" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
						</ul>
					</Form>

					{/* <table className='table-pesquisa' cellspacing='0'>
						<h1 className="form-cadastro__titulo">Pesquisa</h1>
						<thead>
							<tr>
								<th className='linha'>Id</th>
								<th className='linha'>Nome Unidade</th>
								<th className='linha'>Cidade</th>
								<th className='linha'>Editar</th>
							</tr>
						</thead>
						<tbody>
							{
								this.props.unidades && this.props.unidades.map(unidade => (
									<tr>
										<td className='linha'>{unidade.id}</td>
										<td className='linha'>{unidade.nomeUnidade}</td>
										<td className='linha'>{unidade.cidade}</td>
										<td className='linha'><button onClick={(e) => this.editRow(unidade.id, e)}>E</button></td>
									</tr>
								))
							}
						</tbody>
					</table> */}

					<If test={pesquisa}>
						<table className='table-pesquisa' cellspacing='0'>
							<thead>
								<tr>
									<th className='linha'>Id</th>
									<th className='linha'>Nome Unidade</th>
									<th className='linha'>Cidade</th>
									<th className='linha'>Ação</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.unidades && this.props.unidades.map(unidade => (
										<tr>
											<td className='linha'>{unidade.id}</td>
											<td className='linha'>{unidade.nomeUnidade}</td>
											<td className='linha'>{unidade.cidade}</td>
											<td className='linha'><button className="btn-remover" onClick={(e) => this.editRow(unidade.id, e)}><TiEdit /></button></td>
										</tr>
									))
								}
							</tbody>
						</table>
					</If>

				</Container>
			</Fragment>
		) : (
				<Redirect to="/login" />
			)
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario,
	unidades: state.unidade
})

const mapDispatchToProps = dispatch => ({
	buscaUnidades: (event) => {
		event.preventDefault()
		dispatch(getUnidade())
	},
	adicionaUnidade: (unidade) => {
		dispatch(addUnidade(unidade))
	},
	atualizaUnidade: (unidade) => {
		dispatch(atualizarUnidade(unidade))
	}

})


export default connect(mapStateToProps, mapDispatchToProps)(Unidades)