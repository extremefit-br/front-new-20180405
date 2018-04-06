import { postUnidades, getUnidades, deleteUnidades, atualizaUnidades } from "../api/unidade.js"
export const ADD_UNIDADE = 'ADD_UNIDADE'
export const GET_UNIDADE = 'GET_UNIDADE'
export const DELETE_UNIDADE = 'DELETE_UNIDADE'
export const PUT_UNIDADE = 'PUT_UNIDADE'

export function addUnidade(unidade) {
    return dispatch => {
        postUnidades(unidade)
            .then(response => dispatch({
                type: ADD_UNIDADE
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function getUnidade() {
    return dispatch => {
        getUnidades()
            .then(response => dispatch({
                type: GET_UNIDADE,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deleteUnidade() {
    return dispatch => {
        deleteUnidades()
            .then(response => dispatch({
                type: DELETE_UNIDADE
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function atualizarUnidade(unidade) {
    return dispatch => {
        atualizaUnidades(unidade)
            .then(response => dispatch({
                type: PUT_UNIDADE
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}