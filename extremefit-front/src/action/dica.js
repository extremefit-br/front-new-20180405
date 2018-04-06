import { postDicas, getDicas, deleteDicas, getOneDicas, atualizaDicas } from "../api/dica.js"
export const ADD_DICA = 'ADD_DICA'
export const GET_DICA = 'GET_DICA'
export const PUT_DICA = 'PUT_DICA'
export const DELETE_DICA = 'DELETE_DICA'
export const GET_ONE_DICA = 'GET_ONE_DICA'

export function addDica(dica) {
    return dispatch => {
        postDicas(dica)
            .then(response => dispatch({
                type: ADD_DICA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function atualizarDica(dica) {
    return dispatch => {
        atualizaDicas(dica)
            .then(response => dispatch({
                type: PUT_DICA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function getOneDica(id) {
    return dispatch => {
        getOneDicas(id)
            .then(response => dispatch({
                type: GET_ONE_DICA,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}


export function getDica() {
    return dispatch => {
        getDicas()
            .then(response => dispatch({
                type: GET_DICA,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deleteDica(id) {
    return dispatch => {
        deleteDicas(id)
            .then(response => dispatch({
                type: DELETE_DICA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}