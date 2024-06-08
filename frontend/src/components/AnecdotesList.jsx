import {useDispatch, useSelector} from 'react-redux'
import {  creatorSetInitAnec, creatorVoteAnec, creatorSortAnec, acVoteAnec} from '../reducers/anecdoteReducer'
import { creatorSendNotification, setNoti } from '../reducers/notificationReducer'

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    
    const voteAnec = id => {
        const anecdote = anecdotes.find(anec => anec.id === id)
        dispatch(acVoteAnec(id))
        dispatch(setNoti({type: 'msg',  msg: `you voted "${anecdote.content}"`}, 5))

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