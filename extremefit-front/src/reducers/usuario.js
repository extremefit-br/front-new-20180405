import {
    LOGA_USUARIO,
    DESLOGA_USUARIO
} from '../action/login.js'


export function usuario(estadoAtual = false, action) {
    switch (action.type) {
        case LOGA_USUARIO:
            return (true, action.key)
        case DESLOGA_USUARIO:
            return false
        default:
            return estadoAtual
    }
}