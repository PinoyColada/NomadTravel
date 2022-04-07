import Client from './'

export const getPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

// export const getComments = async () => {
//   try {
//     const res = await Client.get(`/posts/${postId}`)
//     return res.data.Comments
//   } catch (error) {
//     throw error
//   }
// }

// export const getLikes = async () => {
//   try {
//     const res = await Client.get(`/posts/${postId}`)
//     return res.data.Likes
//   } catch (error) {
//     throw error
//   }
// }