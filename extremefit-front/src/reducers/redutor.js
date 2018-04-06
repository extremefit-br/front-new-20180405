import { combineReducers } from 'redux'
import { usuario } from './usuario'
import { empresa } from './empresa'
import { dica } from './dica'
import { evento } from './evento'
import { unidade } from './unidade'
import { dado } from './dadoFuncionario'


const reducer = combineReducers({
    usuario,
    empresa,
    dica,
    evento,
    unidade,
    dado
})

export default reducer