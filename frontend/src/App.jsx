import AnecdotesList from "./components/AnecdotesList"
import FormNewAnecdote from "./components/FormNewAnecdote"
import SliceAnec from "./components/SliceAnec"
import Notification from "./components/Notification"

const App = () => {
  return(
    <div>
      <Notification/>
      <AnecdotesList/>
      <FormNewAnecdote/>
      <SliceAnec/>
    </div>
  )
}
export default App