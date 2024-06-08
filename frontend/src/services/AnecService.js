import axios from 'axios'

const baseUrl = `http://localhost:3001/anecdotes`

const getAll =  async () =>{
    const res = await axios.get(`${baseUrl}`)
    return res.data
}
const remove =  async (id) =>{
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data
}

const getById =  async (id) =>{
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data
}
const create = async (content) =>{
    const newObject = {
        content,
        votes: 0
    }
    const res = await axios.post(`${baseUrl}`, newObject)
    return res.data
}

const edit = async (id, newObject) => {
    const res = await axios.put(`${baseUrl}/${id}`, newObject)
    return res.data
}
export default {getAll, remove, getById, edit, create}