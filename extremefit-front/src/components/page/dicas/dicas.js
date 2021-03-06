import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addDica, getDica, deleteDica, getOneDica, atualizarDica } from '../../../action/dica'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import If from '../../if/if.jsx'
import TiDelete from 'react-icons/lib/ti/delete'
import TiEdit from 'react-icons/lib/ti/edit'
import './dicas.css'
import decode from 'jwt-decode';

let pesquisa = false
// let usuarioId = decode(localStorage.getItem('usuario'))
const dica = {
	descricao: "",
	usuarioId: 3
}

class Dicas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			isInvalid: false,
			selectedDica: {},
			dica: dica
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChangeDois = this.handleChangeDois.bind(this)
		this.deleteRow = this.deleteRow.bind(this)
		this.editRow = this.editRow.bind(this)
	}

	editRow(id) {
		this.setState({ dica: this.props.dicas.find(dica => (dica.id === id)) });
	}

	handleSearch(event) {
		console.log("teste evento pesquisa")
		pesquisa = true
		let usuarioId = decode(localStorage.getItem('usuario'))

		this.props.buscaDicas(event)
	}

	handleAdd(event) {
		event.preventDefault()

		let dica = this.state.dica;
		if (dica.id == undefined || dica.id == null) {
			return this.props.adicionaDica(dica)
		}
		return this.props.atualizaDica(dica)

	}

	deleteRow(id) {
		this.props.deletarDica(id)
	}

	handleChangeDois(event) {
		let dica = this.state.dica;
		this.setState({ dica: dica });
	}


	handleChange(name, value, isInvalid) {
		let dica = this.state.dica;
		dica.descricao = value;
		this.setState({ dica: dica });
	}


	render() {
		const { usuario } = this.props

		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Dicas</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="descricao">Descrição</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="descricao"
									placeholder="Descrição"
									aria-label="descricao"
									onChange={this.handleChange}
									value={this.state.dica.descricao}
								/>
							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao form-cadastro__botao--add" type="button" onClick={this.handleAdd}>Salvar</Button></li>&nbsp;&nbsp;&nbsp; 
							<li><Button className="form-cadastro__botao form-cadastro__botao--pesquisa" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
						</ul>
					</Form>

					<If test={pesquisa}>
						<table className='table-pesquisa' cellspacing='0'>
							<thead>
								<tr>
									<th className='linha'>Id</th>
									<th className='linha'>Descrição</th>
									<th className='linha' colspan="2">Ação</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.dicas && this.props.dicas.map(dica => (
										<tr>
											<td className='linha'>{dica.id}</td>
											<td className='linha'>{dica.descricao}</td>
											<td className='linha'><button className="btn-remover" onClick={(e) => this.deleteRow(dica.id, e)}><TiDelete /></button></td>
											<td className='linha'><button className="btn-remover" onClick={(e) => this.editRow(dica.id, e)}><TiEdit /></button></td>
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
	dicas: state.dica
})

const mapDispatchToProps = dispatch => ({
	buscaDicas: (event) => {
		event.preventDefault()
		dispatch(getDica())
	},
	adicionaDica: (dica) => {
		dispatch(addDica(dica))
	},
	buscarUmaDica: (id) => {
		dispatch(getOneDica(id))
	},
	atualizaDica: (dica) => {
		dispatch(atualizarDica(dica))
	},
	deletarDica: (id) => {
		dispatch(deleteDica(id))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Dicas)