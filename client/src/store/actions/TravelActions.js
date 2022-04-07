import { GetLikes, GetPosts, GetComments } from '../../services/TravelServices'
import { GET_COMMENTS, GET_POSTS, GET_LIKES } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLikes = (id) => {
  return async (dispatch) => {
    try {
      const likes = await GetLikes(id)

      dispatch({
        type: GET_LIKES,
        payload: likes
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(id)

      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}