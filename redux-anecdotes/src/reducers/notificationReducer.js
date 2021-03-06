import { createSlice } from '@reduxjs/toolkit'

// const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = null

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
    hideNotification() {
      return null
    }
  }
})

let timeoutID
export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(showNotification(content))
    if (timeoutID)
      clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      dispatch(hideNotification())
    }, time * 1000)
  }
}

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer