const selected = (state = null, action = {}) => {
    switch (action.type) {
    case 'SELECT_COMP':
      return action.payload
    default:
      return state
    }
  }
  
  export default selected