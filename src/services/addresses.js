import axios from 'axios'

const baseUrl = 'http://localhost:3001/addresses'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newAddress => {
    return axios.post(baseUrl, newAddress)
}

const update = (id, newAddress) => {
    return axios.put(`${baseUrl}/${id}`, newAddress)
}
export default {
    getAll: getAll,
    create: create,
    update: update
}