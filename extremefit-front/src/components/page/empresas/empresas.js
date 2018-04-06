import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addEmpresa, getEmpresa, atualizarEmpresa } from '../../../action/empresa'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import If from '../../if/if.jsx'
import TiDelete from 'react-icons/lib/ti/delete'
import TiEdit from 'react-icons/lib/ti/edit'
import './empresas.css'

let pesquisa = false

const empresa = {
	nomeFantasia: "",
	razaoSocial: "",
	cnae: "",
	cnpj: ""
}

class Empresas extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			isInvalid: false,
			selectedEmpresa: {},
			empresa: empresa
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)

		this.handleChangeRazao = this.handleChangeRazao.bind(this)
		this.handleChangeCnae = this.handleChangeCnae.bind(this)
		this.handleChangeCnpj = this.handleChangeCnpj.bind(this)

		this.editRow = this.editRow.bind(this)
	}

	handleSearch(event){
		pesquisa = true
		this.props.buscaEmpresas(event)
	}

	editRow(id) {
		this.setState({ empresa: this.props.empresas.find(empresa => (empresa.id === id)) });
	}

	handleAdd(event) {
		event.preventDefault()
		let empresa = this.state.empresa;
		if (empresa.id == undefined || empresa.id == null) {
			return this.props.adicionaEmpresa(empresa)
		}
		return this.props.atualizaEmpresa(empresa)

	}

	handleChange(name, value, isInvalid) {
		let empresa = this.state.empresa;
		empresa.nomeFantasia = value;
		this.setState({ empresa: empresa });
	}
	handleChangeRazao(name, value, isInvalid) {
		let empresa = this.state.empresa;
		empresa.razaoSocial = value;
		this.setState({ empresa: empresa });
	}
	handleChangeCnae(name, value, isInvalid) {
		let empresa = this.state.empresa;
		empresa.cnae = value;
		this.setState({ empresa: empresa });
	}

	handleChangeCnpj(name, value, isInvalid) {
		let empresa = this.state.empresa;
		empresa.cnpj = value;
		this.setState({ empresa: empresa });
	}
	
	render() {	
		const { usuario } = this.props

		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Empresa</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="nomeFantasia">Nome Fantasia</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="nomeFantasia"
									placeholder="Nome Fantasia"
									aria-label="nomeFantasia"
									onChange={this.handleChange}
									value={this.state.empresa.nomeFantasia}
									 />

								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="razaoSocial">Razão Social</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="razaoSocial"
									placeholder="Razão Social"
									aria-label="razaoSocial"
									onChange={this.handleChangeRazao}
									value={this.state.empresa.razaoSocial}
									/>
							</div>
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cnae">CNAE</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="cnae"
									placeholder="CNAE"
									aria-label="cnae"
									onChange={this.handleChangeCnae}
									value={this.state.empresa.cnae}
									/>
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cnpj">CNPJ</FormLabel>
								<Input 
									className="form-cadastro__campo form-cadastro__campo--input" 
									type="text"
									name="cnpj"
									placeholder="CNPJ"
									aria-label="cnpj"
									onChange={this.handleChangeCnpj}
									value={this.state.empresa.cnpj}
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
								<th className='linha'>Nome Fantasia</th>
								<th className='linha'>Razão Social</th>
								<th className='linha'>CNAE</th>
								<th className='linha'>CNPJ</th>
								<th className='linha'>Editar</th>
							</tr>
						</thead>
						<tbody>
							{
								this.props.empresas && this.props.empresas.map(empresa => (
									<tr>
										<td className='linha'>{empresa.id}</td>
										<td className='linha'>{empresa.nomeFantasia}</td>
										<td className='linha'>{empresa.razaoSocial}</td>
										<td className='linha'>{empresa.cnae}</td>
										<td className='linha'>{empresa.cnpj}</td>
										<td className='linha'><button onClick={(e) => this.editRow(empresa.id, e)}>E</button></td>
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
									<th className='linha'>Nome Fantasia</th>
									<th className='linha'>Razão Social</th>
									<th className='linha'>CNAE</th>
									<th className='linha'>CNPJ</th>
									<th className='linha'>Ação</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.empresas && this.props.empresas.map(empresa => (
										<tr>
											<td className='linha'>{empresa.id}</td>
											<td className='linha'>{empresa.nomeFantasia}</td>
											<td className='linha'>{empresa.razaoSocial}</td>
											<td className='linha'>{empresa.cnae}</td>
											<td className='linha'>{empresa.cnpj}</td>
											<td className='linha'><button className="btn-remover" onClick={(e) => this.editRow(empresa.id, e)}><TiEdit /></button></td>
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
	empresas: state.empresa
})

const mapDispatchToProps = dispatch => ({
	buscaEmpresas: (event) => {
		event.preventDefault()
		dispatch(getEmpresa())
	},
	adicionaEmpresa: (empresa) => {
		dispatch(addEmpresa(empresa))
	},
	atualizaEmpresa: (empresa) => {
		dispatch(atualizarEmpresa(empresa))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Empresas)