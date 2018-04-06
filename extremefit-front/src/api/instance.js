import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://caiocsampaio-001-site1.ftempurl.com/api'
})

export default instance