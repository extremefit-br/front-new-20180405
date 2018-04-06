import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addDado, getDado, atualizarDado, deleteDado } from '../../../action/dadoFuncionario'
import { getEmpresa } from '../../../action/empresa'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './dadosFuncionarios.css'
import decode from 'jwt-decode';
import Select from 'react-select';

const dado = {
	cpf: "",
	setor: "",
	funcao: "",
	empresaId: null
}

class DadosFuncionarios extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			isInvalid: false,
			selectedDado: {},
			dado: dado
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleChangeFuncao = this.handleChangeFuncao.bind(this)
		this.handleChangeSetor = this.handleChangeSetor.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChangeDois = this.handleChangeDois.bind(this)
		this.deleteRow = this.deleteRow.bind(this)
		this.editRow = this.editRow.bind(this)
	}

	componentDidMount() {
		this.props.buscaEmpresas()
	}

	editRow(id) {
		this.setState({ dado: this.props.dados.find(dado => (dado.id === id)) });
	}

	handleSearch(event) {
		console.log("teste evento pesquisa")
		this.props.buscaDados(event)
	}

	handleAdd(event) {
		event.preventDefault()
		let dado = this.state.dado;
		if (dado.id == undefined || dado.id == null) {
			return this.props.adicionaDado(dado)
		}
		return this.props.atualizaDado(dado)

	}

	deleteRow(id) {
		this.props.deletarDado(id)
	}

	handleChangeDois(event) {
		let dado = this.state.dado;
		dado.empresaId = event.target.value;
		this.setState({ dado: dado });
	}

	handleChange(name, value, isInvalid) {
		let dado = this.state.dado;
		dado.cpf = value;
		this.setState({ dado: dado });
	}
	handleChangeSetor(name, value, isInvalid) {
		let dado = this.state.dado;
		dado.setor = value;
		this.setState({ dado: dado });
	}
	handleChangeFuncao(name, value, isInvalid) {
		let dado = this.state.dado;
		dado.funcao = value;
		this.setState({ dado: dado });
	}

	render() {
		const { usuario } = this.props
		const { empresas } = this.props

		let usuarioId = decode(localStorage.getItem('usuario'))

		console.log(this.props.empresas)

		// return usuario && (usuarioId.role == "Especialista" || usuarioId.role == "Admin" || usuarioId.role == "Sesi") ? (
		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Dados</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cpf">CPF</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="cpf"
									placeholder="CPF"
									aria-label="cpf"
									onChange={this.handleChange}
									value={this.state.dado.cpf}
								/>

								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cpf">Setor</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="setor"
									placeholder="Setor"
									aria-label="setor"
									onChange={this.handleChangeSetor}
									value={this.state.dado.setor}
								/>

								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cpf">Função</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="funcao"
									placeholder="Função"
									aria-label="funcao"
									onChange={this.handleChangeFuncao}
									value={this.state.dado.funcao}
								/>

								<select value={this.state.dado.empresaId} onChange={this.handleChangeDois}>
									{empresas.map(({ id, razaoSocial }) => (
										<option key={id} value={id}>
											{razaoSocial}
										</option>
									))}
								</select>

							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					</Form>

					<table className='table-pesquisa' cellspacing='0'>
						<h1 className="form-cadastro__titulo">Pesquisa</h1>
						<thead>
							<tr>
								<th className='linha'>Id</th>
								<th className='linha'>CPF</th>
								<th className='linha'>Setor</th>
								<th className='linha'>Função</th>
								<th className='linha'>Empresa</th>
								<th className='linha'>Deletar</th>
								<th className='linha'>Editar</th>
							</tr>
						</thead>
						<tbody>
							{
								this.props.dados && this.props.dados.map(dado => (
									<tr>
										<td className='linha'>{dado.id}</td>
										<td className='linha'>{dado.cpf}</td>
										<td className='linha'>{dado.setor}</td>
										<td className='linha'>{dado.funcao}</td>
										<td className='linha'>{dado.empresaId}</td>
										<td className='linha'><button onClick={(e) => this.deleteRow(dado.id, e)}>X</button></td>
										<td className='linha'><button onClick={(e) => this.editRow(dado.id, e)}>E</button></td>
									</tr>
								))
							}
						</tbody>
					</table>

				</Container>
			</Fragment>
		) : (
				<Redirect to="/login" />
			)
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario,
	dados: state.dado,
	empresas: state.empresa
})

const mapDispatchToProps = dispatch => ({
	buscaDados: (event) => {
		event.preventDefault()
		dispatch(getDado())
	},
	adicionaDado: (dado) => {
		dispatch(addDado(dado))
	},
	buscaEmpresas: () => {
		dispatch(getEmpresa())
	},
	deletarDado: (id) => {
		dispatch(deleteDado(id))
	},
	atualizaDado: (dado) => {
		dispatch(atualizarDado(dado))
	}

})


export default connect(mapStateToProps, mapDispatchToProps)(DadosFuncionarios)