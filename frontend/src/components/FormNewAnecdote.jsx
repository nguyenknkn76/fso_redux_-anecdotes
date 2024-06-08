import { useDispatch, useSelector } from "react-redux"
import { creatorNewAnec } from "../reducers/anecdoteReducer"
import { creatorResetNotification, creatorSendNotification } from "../reducers/notificationReducer"
const FormNewAnecdote = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const notification = useSelector(state => state.notification)

    const submitAddNewAnec = (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        dispatch(creatorNewAnec(anecdoteContent))
        dispatch(creatorSendNotification({type: "msg", msg: "add new anec success"}))
    }

    return(
        <div>
            <form onSubmit={submitAddNewAnec}>
                new anec : <input name='newAnecdote'/>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default FormNewAnecdote