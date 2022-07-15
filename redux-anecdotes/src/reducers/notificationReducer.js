import { createSlice } from '@reduxjs/toolkit'

// const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = null

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showLikeNotification(state, action) {
      return `you voted '${action.payload}'`
    },
    showAddNotification(state, action) {
      return `you added '${action.payload}'`
    },
    hideNotification() {
      return null
    }
  }
})

export const likeNotification = (content) => {
  return(dispatch) => {
    dispatch(showLikeNotification(content))
  }
}

export const addNotification = (content) => {
  return(dispatch) => {
    dispatch(showAddNotification(content))
  }
}

export const hideNotificat = () => {
  return(dispatch) => {
    dispatch(hideNotification())
  }
}

export const { showLikeNotification, showAddNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer