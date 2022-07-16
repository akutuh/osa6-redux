import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { addNotification, hideNotificat } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(createAnecdote(content))
    dispatch(addNotification(content))
    event.target.anecdote.value = ''
    setTimeout(() => dispatch(hideNotificat()) , 5000)
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