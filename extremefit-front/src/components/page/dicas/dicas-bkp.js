import React, {Fragment} from 'react'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import FormTextarea from '../../form/formTextarea/formTextarea.js'
import FormSelect from '../../form/formSelect/formSelect.js'
import Button from '../../form/formButton/formButton.js'
import './dicas.css'


const Dicas = () => (
	<Fragment>
		<Menu />
		<Container className="dicas">
			<Form className="form-cadastro">
				<h1 className="form-cadastro__titulo">Dicas</h1>
				<FormLabel className="form-cadastro__label" for="desc">Descrição</FormLabel>
				{/* <textarea className="form-cadastro__campo" name="" id="desc" cols="30" rows="10"></textarea> */}
				<FormTextarea className="form-cadastro__campo" name="" id="desc" cols="30" rows="10"></FormTextarea>
				<FormLabel className="form-cadastro__label" for="dicaTip">Tipo</FormLabel>
				<FormSelect className="form-cadastro__campo" id="dicaTipo">
					<option value="dor">Dor</option>
					<option value="saude">Saude</option>
					<option value="nutricao">Nutrição</option>
				</FormSelect>
				<ul className="form-cadastro__lista-botao">
					<li><Button className="form-cadastro__botao">Adicionar Dica</Button></li>
					<li><Button className="form-cadastro__botao">Pesquisar Dica</Button></li>
					<li><Button className="form-cadastro__botao">Remover Dica</Button></li>
				</ul>
			</Form>
		</Container>
	</Fragment>
)

export default Dicas