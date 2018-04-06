import { postLogin } from "../api/login.js";
export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'


export function logaUsuario(email, senha) {
    console.log("ok: " + email)
    return dispatch => {
        postLogin(email, senha)
            .then(response => dispatch({
                type: LOGA_USUARIO,
                key: response.data.accessToken
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deslogaUsuario() {
    return {
        type: DESLOGA_USUARIO,
    }
}