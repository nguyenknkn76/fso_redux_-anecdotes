import { useDispatch, useSelector } from "react-redux"
import { addNewAnec, creatorNewAnec } from "../reducers/anecdoteReducer"
import { creatorResetNotification, creatorSendNotification, setNoti } from "../reducers/notificationReducer"
import AnecService from "../services/AnecService"
const FormNewAnecdote = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const notification = useSelector(state => state.notification)

    const submitAddNewAnec = async (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        dispatch(addNewAnec(anecdoteContent))
        dispatch(setNoti({type: 'msg',  msg: 'added success'}, 5))
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