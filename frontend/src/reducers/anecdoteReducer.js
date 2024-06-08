import {createSlice} from '@reduxjs/toolkit'

export const listContent = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'Hello world !!! Object Oriented Programing'
]

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const initialState = listContent.map(content => ({
    id: generateId(),
    content,
    votes: 0
}))

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState,
    reducers: {
        creatorNewAnec(state, action){
            const newAnec = {
                content: action.payload,
                id: generateId(),
                votes: 0
            }
            return [...state, newAnec]
        },
        creatorEditAnec(state, action){
            const {id, content} = action.payload
            const needToEditAnec = state.find(anec => anec.id === id)
            const editedAnec = {...needToEditAnec, content: content}
            return state.map(anec => anec.id !== id ? anec : editedAnec)
        },
        creatorVoteAnec(state, action){
            const id = action.payload
            const needToVoteAnec = state.find(anec => anec.id ===id)
            const votedAnec = {...needToVoteAnec, votes: needToVoteAnec.votes + 1}
            return state.map(anec => anec.id !== id ? anec : votedAnec)
        },
        creatorSortAnec(state, action){
            // const sortedState = state.slice().sort((a,b) => b.votes - a.votes)
            // return sortedState
            return [...state].sort((a,b) => b.votes - a.votes)
        },
    } 
})

export const {creatorEditAnec, creatorNewAnec, creatorSortAnec, creatorVoteAnec} = anecdoteSlice.actions
export default anecdoteSlice.reducer
