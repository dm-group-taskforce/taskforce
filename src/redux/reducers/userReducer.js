import Axios from 'axios';


const initialState = {
   username: '',
   user_id: null,
   email: '',
   first_name: '',
   last_name: '',
   redirect: false
}


const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const DELETE_USER = 'DELETE_USER';
const GET_USER = 'GET_USER'; 
const UPDATE_USER = 'UPDATE_USER'


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
export function updateUser(editUser) {
   return {
      type: UPDATE_USER,
      payload: Axios.put('/auth/edit', editUser)
   }
}


export function getUser() {
   return {
      type: GET_USER,
      payload: Axios.get('/auth/user')
   }
}

export default function reducer(state = initialState, action) {
   const { type, payload } = action;


   console.log(type, payload);
   switch (type) {
      
      case `${REGISTER_USER}_FULFILLED`:
         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
            email: payload.data.email,
            first_name: payload.data.first_name,
            last_name: payload.data.last_name,
            redirect: true
         };
      case `${LOGIN_USER}_FULFILLED`:

         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
            email: payload.data.email,
            first_name: payload.data.first_name,
            last_name: payload.data.last_name,
            redirect: true
         };
      case LOGOUT_USER:
         return {
            user_id: null,
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            redirect: false
         };
      case `${UPDATE_USER}_FULFILLED`:
      console.log(payload)
      return {
            ...state,
            username: payload.data.username,
            email: payload.data.email,
            first_name: payload.data.first_name,
            last_name: payload.data.last_name,
            redirect: false
      };
      case DELETE_USER:
            return {
               user_id: null,
               username: '',
               email: '',
               first_name: '',
               last_name: '',
               redirect: false
            };
      case `${GET_USER}_FULFILLED`:
         
            return{
               user_id: payload.data.user_id,
               username: payload.data.username,
               email: payload.data.email,
               first_name: payload.data.first_name,
               last_name: payload.data.last_name,
               redirect: true
             };
        default: return state;
    }
}
