import {useDispatch, useSelector} from 'react-redux'
import { initialState, creatorNewAnec, creatorVoteAnec, creatorSortAnec} from '../reducers/anecdoteReducer'
import { useEffect } from 'react'
import { creatorSendNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)
    // console.log(anecdotes)

    // useEffect(()=> {
    //     dispatch(creatorNewAnec('hello sir'))
    // },[])
    
    const voteAnec = id => {
        const anecdote = anecdotes.find(anec => anec.id === id)
        dispatch(creatorVoteAnec(id))
        dispatch(creatorSendNotification({type: "msg", msg: `you voted "${anecdote.content}"`}))
    }

    const sortAnecdotesList = () => {
        dispatch(creatorSortAnec())
    }

    return(
        <div>
            this is Anecdotes List
            <ul>
                {anecdotes?.map(anecdote => (
                    <li key={anecdote.id}>
                        {anecdote.id} : {anecdote.content} <strong>(votes: {anecdote.votes})</strong> <button onClick={() => voteAnec(anecdote.id)}>vote</button>
                    </li>
                ))}
            </ul>
            sort anec by no of votes <button onClick={sortAnecdotesList}>sort</button> 
            <br/><br/>
        </div>
    )
}
export default AnecdotesList