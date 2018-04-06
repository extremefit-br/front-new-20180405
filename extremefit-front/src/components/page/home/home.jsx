import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import FaUser from 'react-icons/lib/fa/user'
import FaSuitcase from 'react-icons/lib/fa/suitcase'
import FaCalendar from 'react-icons/lib/fa/calendar'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaThumbTack from 'react-icons/lib/fa/thumb-tack'
import FaUserMd from 'react-icons/lib/fa/user-md'
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { isInvalid: false }
    }
    
    render(){
        const { usuario } = this.props
        console.log("var: " + usuario)
        return usuario ? (
            <Fragment>
                <Menu />
                <Container className="main flex">
                    <Link to="/dicas" className='item-home item-red'>
                        <FaLightbulbO />
                        <span>Dicas</span>
                    </Link>
                    <Link to="/empresas" className='item-home item-red'>
                        <FaSuitcase />
                        <span>Empresas</span>
                    </Link>
                    <Link to="/especialista" className='item-home item-red'>
                        <FaUserMd />
                        <span>Especialistas</span>
                    </Link>
                    <Link to="/eventos" className='item-home item-red'>
                        <FaCalendar />
                        <span>Eventos</span>
                    </Link>
                    <Link to="/unidadesSesi" className='item-home item-red'>
                        <FaThumbTack />
                        <span>Unidades Sesi</span>
                    </Link>
                    <Link to="/dadosFuncionarios" className='item-home item-red'>
                        <FaUser />
                        <span>Dados Funcionários</span>
                    </Link>
                    
                    
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
    logaUsuario: (event) => {
        event.preventDefault()
        // dispatch(logaUsuario(email, senha))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)