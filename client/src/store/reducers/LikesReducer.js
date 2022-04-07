const { GET_LIKES } = require('../types')

const iState = {
  likes: '',
}

const LikesReducer = (state = iState, action) => {
  switch (action.type) {
      case GET_LIKES:
      return { ...state, likes: action.payload }
    default:
      return { ...state }
  }
}

export default LikesReducer