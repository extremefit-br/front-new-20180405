import { postEventos, getEventos, deleteEventos, getOneEventos, atualizaEventos } from "../api/evento.js"
export const ADD_EVENTO = 'ADD_EVENTO'
export const PUT_EVENTO = 'PUT_EVENTO'
export const GET_EVENTO = 'GET_EVENTO'
export const GET_ONE_EVENTO = 'GET_ONE_EVENTO'
export const DELETE_EVENTO = 'DELETE_EVENTO'

export function addEvento(evento) {
    return dispatch => {
        postEventos(evento)
            .then(response => dispatch({
                type: ADD_EVENTO
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function atualizarEvento(evento) {
    return dispatch => {
        atualizaEventos(evento)
            .then(response => dispatch({
                type: PUT_EVENTO
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}


export function getEvento() {
    return dispatch => {
        getEventos()
            .then(response => dispatch({
                type: GET_EVENTO,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function getOneEvento(id) {
    return dispatch => {
        getOneEventos(id)
            .then(response => dispatch({
                type: GET_ONE_EVENTO,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}


export function deleteEvento(id) {
    return dispatch => {
        deleteEventos(id)
            .then(response => dispatch({
                type: DELETE_EVENTO
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}