import axios from 'axios'

let api = axios.create({
    baseURL: 'https://pay-debits.herokuapp.com'
    // baseURL: 'http://localhost:3000'
})

export default api