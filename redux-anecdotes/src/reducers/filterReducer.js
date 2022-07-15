import { createSlice } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'

const initialState = ''

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const filterAnec = (content) => {
  return(dispatch) => {
    dispatch(filterAnecdotes(content))
  }
}


export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer