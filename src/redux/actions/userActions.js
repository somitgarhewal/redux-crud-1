import { ADD_NEW_USER } from '../types'
import { DELETE_USER } from '../types'

export const addNewUser = (payload) => ({
  type: ADD_NEW_USER,
  payload
})

// export const deleteUser = (payload) => ({
//   type: DELETE_USER,
//   payload
// })