const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const incrementedGood = {
        ...state,
        good: state.good + 1
      }
      return incrementedGood
    case 'OK':
      const incrementedOk = {
        ...state,
        ok: state.ok + 1
      }
      return incrementedOk
    case 'BAD':
      const incrementedBad = {
        ...state,
        bad: state.bad + 1
      }
      return incrementedBad
    case 'ZERO':
      const zeroState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return zeroState
    default: return state
  }
  
}

export default counterReducer