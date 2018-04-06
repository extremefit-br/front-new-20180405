import { postEmpresas, getEmpresas, deleteEmpresas, atualizaEmpresas } from "../api/empresa.js"
export const ADD_EMPRESA = 'ADD_EMPRESA'
export const GET_EMPRESA = 'GET_EMPRESA'
export const DELETE_EMPRESA = 'DELETE_EMPRESA'
export const PUT_EMPRESA = 'PUT_EMPRESA'

export function addEmpresa(empresa) {
    return dispatch => {
        postEmpresas(empresa)
            .then(response => dispatch({
                type: ADD_EMPRESA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
} 

export function getEmpresa() {
    return dispatch => {
        getEmpresas()
            .then(response => dispatch({
                type: GET_EMPRESA,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deleteEmpresa() {
    return dispatch => {
        deleteEmpresas()
            .then(response => dispatch({
                type: DELETE_EMPRESA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function atualizarEmpresa(empresa) {
    return dispatch => {
        atualizaEmpresas(empresa)
            .then(response => dispatch({
                type: PUT_EMPRESA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}