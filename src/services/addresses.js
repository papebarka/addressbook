import axios from 'axios'

const baseUrl = 'http://localhost:3001/addresses'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newAddress => {
    const request = axios.post(baseUrl, newAddress)
    return request.then(response => response.data)
}

const update = (id, newAddress) => {
    const request = axios.put(`${baseUrl}/${id}`, newAddress)
    return request.then(response => response.data)
}
export default {
    getAll: getAll,
    create: create,
    update: update
}