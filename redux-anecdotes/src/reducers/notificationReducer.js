import { createSlice } from '@reduxjs/toolkit'

const notificationAtStart = [
  'some notification'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (notification) => {
  return {
    content: notification,
    id: getId()
  }
}

const initialState = notificationAtStart.map(asObject)

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {

  }
})

export default notificationSlice.reducer