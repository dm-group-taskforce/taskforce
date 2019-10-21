import Axios from 'axios';


const initialState = {
   username: '',
   user_id: null,

}


const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const DELETE_USER = 'DELETE_USER';
const GET_USER = 'GET_USER';


export function registerUser(newUser) {
   return {
      type: REGISTER_USER,
      payload: Axios.post('/auth/register', newUser)
   }
}

export function loginUser(user) {
   return {
      type: LOGIN_USER,
      payload: Axios.post('/auth/login', user)
   }
}

export function logoutUser() {
   Axios.post('/auth/logout')

   return {
      type: LOGOUT_USER
   }
}

export function deleteUser() {
   Axios.delete('/auth/delete')

   return {
      type: DELETE_USER
   }
}

export function getUser() {
   return {
      type: GET_USER,
      action: Axios.get('/auth/user')
   }
}

export default function reducer(state = initialState, action) {
   const { type, payload } = action;



   switch (type) {
      case `${REGISTER_USER}_FULFILLED`:
         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
         };
      case `${LOGIN_USER}_FULFILLED`:

         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username
         };
      case LOGOUT_USER:
         return {
            user_id: null,
            username: ''
         };
      case DELETE_USER:
         return {
            user_id: null,
            username: ''
         }
      case GET_USER:
         return {
            user_id: payload.data.user_id,
            username: payload.data.username
         }
      default: return state;
   }
}