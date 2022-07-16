import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      const newState = state.map(a =>
        a.id !== id ? a : changedAnecdote
      )
      return newState.sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { appendAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addNewVote = anecdote => {
  return async dispatch => {
    const votedAnecdote = { content: anecdote.content, votes: anecdote.votes + 1, id: anecdote.id}
    const newVote = await anecdoteService.addVote(votedAnecdote)
    dispatch(voteAnecdote(newVote))
  }
}

export default anecdoteSlice.reducer