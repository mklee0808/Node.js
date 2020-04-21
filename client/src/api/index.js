import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000/api'
})

const addrInsert = payload => api.post('/addr', payload)
const addrList = () => api.get('/addrs')
const addrUpdate = (id, payload) => api.put('/addr/' + id, payload)
const addrOne = id => api.get('/addr/' + id)

const apis = {
    addrInsert,
    addrList,
    addrUpdate,
    addrOne
}

export default apis