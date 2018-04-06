import React from 'react'
import LogoSESI from './sesi.png'
import TiContacts from 'react-icons/lib/ti/contacts'
import TiSocialGithub from 'react-icons/lib/fa/github'
import './footer.css'

const Footer = props =>(
    <footer className='footer'>
        <div>
            <address>
                <div className="footer-empresa"><a href="https://codexp.sp.senai.br/" target="_blank">Escola SENAI de informática</a></div>
                Alameda Barão de Limeira, 539 - Santa Cecilia <br />
                São Paulo - SP, 01202-001
            </address>
        </div>
        <div className="txt-right">
            <a href="" target="_blank"><TiContacts /></a>
            <a href="https://github.com/extremefit-br" target="_blank"><TiSocialGithub /></a>
        </div>
        
    </footer>
) 

export default Footer