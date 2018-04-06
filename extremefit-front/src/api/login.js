import instance from './instance'
import axios from 'axios'

export function postLogin(email, senha) {
    return instance.post('/auth/login', { email, senha })
        .then(response => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            localStorage.setItem('usuario', `${response.data.accessToken}`)
            return response
        })
}