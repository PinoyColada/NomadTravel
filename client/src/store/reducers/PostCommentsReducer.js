const { GET_COMMENTS } = require('../types')

const iState = {
  comments: []
}

const PostCommentsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    default:
      return { ...state }
  }
}

export default PostCommentsReducer