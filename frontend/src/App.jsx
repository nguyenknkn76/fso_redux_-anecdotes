import AnecdotesList from "./components/AnecdotesList"
import FormNewAnecdote from "./components/FormNewAnecdote"
import SliceAnec from "./components/SliceAnec"
import Notification from "./components/Notification"
import {useDispatch} from 'react-redux'
import { useEffect } from "react"
import { creatorSetInitAnec, initialAnec } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()
  const fetchAnec = () => {
    dispatch(initialAnec())
  }

  useEffect(() => {
    fetchAnec()
  }, [])

  return(
    <div>
      <Notification/>
      <AnecdotesList/>
      <FormNewAnecdote/>
      {/* <SliceAnec/> */}
    </div>
  )
}
export default App