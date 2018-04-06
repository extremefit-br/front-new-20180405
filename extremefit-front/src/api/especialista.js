import instance from './instance'


export function postEspecialistas(especialista) {
    return instance.post('/Auth/cadastro/especialista', especialista)
}

// export function getEspecialistas() {
//     return instance.get('/Eventos')
// }

// export function deleteEventos(id) {
//     return instance.delete('/Eventos', { id })
// }