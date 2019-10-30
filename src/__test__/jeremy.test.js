import { registerUser, loginUser, logoutUser, updateUser, getUser} from "../redux/reducers/userReducer";

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
