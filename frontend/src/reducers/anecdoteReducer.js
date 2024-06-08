import {createSlice} from '@reduxjs/toolkit'
import AnecService from '../services/AnecService'

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState : [],
    reducers: {
        creatorNewAnec(state, action){
            const newAnec = action.payload
            return [...state, newAnec]
        },
        creatorEditAnec(state, action){
            const {id, content} = action.payload
            const needToEditAnec = state.find(anec => anec.id === id)
            const editedAnec = {...needToEditAnec, content: content}
            return state.map(anec => anec.id !== id ? anec : editedAnec)
        },
        creatorVoteAnec(state, action){
            const votedAnec = action.payload
            return state.map(anec => anec.id !== votedAnec.id ? anec : votedAnec)
        },
        creatorSortAnec(state, action){
            return [...state].sort((a,b) => b.votes - a.votes)
        },
        creatorAppendAnec(state, action){
            state.push(action.payload)
        },
        creatorSetInitAnec(state, action){
            return action.payload
        }
    } 
})

export const {creatorEditAnec, creatorNewAnec, creatorSortAnec, creatorVoteAnec, creatorSetInitAnec} = anecdoteSlice.actions

export const initialAnec = () =>{
    return async dispatch =>{
        const anecdotes = await AnecService.getAll()
        return dispatch(creatorSetInitAnec(anecdotes))
    }
}
export const addNewAnec = (content) =>{
    return async dispatch =>{
        const newAnec = await AnecService.create(content)
        return dispatch(creatorNewAnec(newAnec))
    }
}
export const acVoteAnec = (id) => {
    return async dispatch => {
        const needToVoteAnec = await AnecService.getById(id)
        const newAnec = {...needToVoteAnec, votes: needToVoteAnec.votes + 1}
        const votedAnec = await AnecService.edit(id, newAnec)
        return dispatch(creatorVoteAnec(votedAnec))
    }
}
export default anecdoteSlice.reducer
