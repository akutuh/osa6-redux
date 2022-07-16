import { connect } from 'react-redux'
import { filterAnec } from '../reducers/filterReducer'

const Filter = (props) => {
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(event) => props.filterAnec(event.target.value)}/>
    </div>
  )
}

export default connect(
  null,
  { filterAnec }
)(Filter)