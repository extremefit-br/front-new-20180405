import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import FaComment from 'react-icons/lib/fa/comment'
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
                    
                    <Link to="/especialista" className='item-home item-blue'>
                        <FaComment />
                        <span>Especialistas</span>
                    </Link>
                    <Link to="/dicas" className='item-home item-red'>
                        <FaComment />
                        <span>Dicas</span>
                    </Link>
                    <Link to="/empresas" className='item-home item-orange'>
                        <FaComment />
                        <span>Empresas</span>
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