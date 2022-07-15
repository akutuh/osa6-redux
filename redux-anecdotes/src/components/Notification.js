import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notifications }) => {
    if (notifications === null) {
      return null
    } else {
      return notifications
    }
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if ( notification !== null) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

export default Notification
