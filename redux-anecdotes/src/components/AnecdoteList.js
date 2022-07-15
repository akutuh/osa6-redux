import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { likeNotification, hideNotificat } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {

  //const anecdotes = useSelector(state => state.anecdotes)
  const anecdotes = useSelector(state => {
    if ( state.filters === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => anecdote.content.includes((state.filters).toLowerCase()))
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('anecdote:', anecdote)
    console.log('vote', anecdote.id)
    dispatch(voteAnecdote(anecdote.id))
    dispatch(likeNotification(anecdote.content))
    setTimeout(() => dispatch(hideNotificat()) , 5000)
  }

  return(
    <div>
      {anecdotes.map(anecdote =>
       <Anecdote 
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={() => vote(anecdote)}
       />
      )}
    </div>
  )
}

export default AnecdoteList