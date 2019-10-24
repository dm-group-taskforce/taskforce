import React from "react";
import {Switch, Route} from "react-router-dom";
import Register from "./Components/Register/Register";
import NewTask from "./Components/NewTask/NewTask";
import Games from "./Components/Games/Games";
import Profile from "./Components/Profile/Profile";
import LandingPage from "./Components/LandingPage/Landingpage";
import Login from './Components/Login/Login'
import Account from "./Components/Account/Account" 
import EditTask from './Components/EditTask/EditTask'

export default (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path = "/account" component = {Account} />
        <Route exact path='/tasks/:taskId' component={EditTask}/>
        <Route path="/tasks" component={NewTask} />
        <Route path="/games" component={Games} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={LandingPage} />
    </Switch>
)