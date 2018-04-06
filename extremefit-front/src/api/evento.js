import instance from './instance'


export function postEventos(evento) {
    return instance.post('/Eventos', evento)
}

export function getEventos() {
    return instance.get('/Eventos')
}

export function deleteEventos(id) {
    return instance.delete(`/Eventos/${id}`)
    // return instance.delete('/Eventos/${id}', { id })
}

export function getOneEventos(id) {
    return instance.get(`/Eventos/${id}`)
    // return instance.delete('/Eventos/${id}', { id })
}

export function atualizaEventos(evento) {
    return instance.put(`/Eventos/${evento.id}`, evento)
}