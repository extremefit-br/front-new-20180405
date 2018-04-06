import React from 'react'
import {Link } from 'react-router-dom'
import LogoVidaSaudavel from '../page/login/logo_vida_saudavel.png'
import './menu.css'

const Menu = () => (
	<nav className="navbar">
		<img className="logo" src="http://www.fiepb.com.br/images/noticias/5264/image/Logo-SESI.jpg" alt="" />
		<ul className="list">
			<li className="list__item"><Link to="/dicas">Dicas</Link></li>
			<li className="list__item"><Link to="/empresas">Empresa</Link></li>
			<li className="list__item"><Link to="/especialista">Especialista</Link></li>
			<li className="list__item"><Link to="/eventos">Eventos</Link></li>
			<li className="list__item"><Link to="/unidadesSesi">Unidades Sesi</Link></li>
			<li className="list__item"><Link to="/dadosFuncionarios">Dados Funcionários</Link></li>
		</ul>
	</nav>
)

export default Menu