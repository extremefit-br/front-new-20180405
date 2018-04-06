import { postEspecialistas } from "../api/especialista.js"
export const ADD_ESPECIALISTA = 'ADD_ESPECIALISTA'

export function addEspecialista(especialista) {
    return dispatch => {
        postEspecialistas(especialista)
            .then(response => dispatch({
                type: ADD_ESPECIALISTA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
} 