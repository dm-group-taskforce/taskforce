import { registerUser, loginUser, logoutUser, updateUser, getUser} from "../redux/reducers/userReducer";
import {editTask, addTask, getUserTask, deleteTask} from '../redux/reducers/taskReducer'
import {getRank} from '../redux/reducers/rankReducer'

//Jeremy's Tests
// Register User
test('Test to see type of registerUser == "REGISTER_USER" ', () => {
    expect(registerUser().type).toBe("REGISTER_USER")
})
//  Login
test('Test to see type of loginUser == "LOGIN_USER" ', () => {
    expect(loginUser().type).toBe("LOGIN_USER")
})
//  Logout
test('Test to see type of logoutUser == LOGOUT_USER', () => {
    expect(logoutUser().type).toBe("LOGOUT_USER")
})
// Get User Session
test('Test to see type of getUser == "GET_USER"', () => {
    expect(getUser().type).toBe("GET_USER")
})
// Update
test('Test to see type of updateUser == {} ', () => {
    expect(updateUser().payload).resolves.toEqual({})
})


//Jake's Tests
//editTask
test('Test to see type of editTask == "UPDATE_TASK" ', () => {
    expect(editTask().type).toBe("UPDATE_TASK")
})
// addTask
test('Test to see type of addTask == "ADD_TASK" ', () => {
    expect(addTask().type).toBe("ADD_TASK")
})
//  getUserTask
test('Test to see type getUserTask == GET_USER_TASK', () => {
    expect(getUserTask().type).toBe("GET_USER_TASK")
})
// Get deleteTask
test('Test to see type of deleteTask == "DELETE_TASK"', () => {
    expect(deleteTask().type).toBe("DELETE_TASK")
})
// Get getRank
test('Test to see type of getRank == "GET_RANK"', () => {
    expect(getRank().type).toBe("GET_RANK")
})