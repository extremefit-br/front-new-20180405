import instance from './instance'


export function postDicas(dica) {
    return instance.post('/Dicas', dica)
}

export function getDicas() {
    return instance.get('/Dicas')
}

export function deleteDicas(id) {
    return instance.delete(`/Dicas/${id}`)
}

export function getOneDicas(id) {
    return instance.get(`/Dicas/${id}`)
    // return instance.delete('/Eventos/${id}', { id })
}

export function atualizaDicas(dica) {
    return instance.put(`/Dicas/${dica.id}`, dica)
}