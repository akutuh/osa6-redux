import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    dispatch(addNewAnecdote(event.target.anecdote.value))
    event.target.anecdote.value = ''
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm