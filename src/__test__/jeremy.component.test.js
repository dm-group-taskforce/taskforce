import React from "react";
import { shallow, mount, render } from "enzyme"; //these will mock our component rendering in the DOM
import { Provider } from "react-redux";
//mock store for testing your redux async action creators and middleware
//the mock store will create an array of dispatched actions which serve as an action log for tests.
import configureMockStore from "redux-mock-store"; 
import { configure } from "enzyme"; //see create react app running test
import Adapter from "enzyme-adapter-react-16";

// Components to test
import SignedInNav from '../Components/SignedInNav/SignedInNav';
import NewTask from '../Components/NewTask/NewTask';
import Profile from '../Components/Profile/Profile';
import Register from '../Components/Register/Register';
import TaskBar from '../Components/TaskBar/TaskBar';
configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({ userReducer: {} });

describe("SignedInNav Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <SignedInNav />
            </Provider>).exists()).toBe(true);
    })
})

describe("NewTask Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <NewTask />
            </Provider>).exists()).toBe(true);
    })
})

describe("Profile Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <Profile />
            </Provider>).exists()).toBe(true);
    })
})

describe("Register Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <Register />
            </Provider>).find("form.register-form").exists()).toBe(false)
    })
})

describe("TaskBar Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <TaskBar />
            </Provider>).exists()).toBe(true)
    })
})