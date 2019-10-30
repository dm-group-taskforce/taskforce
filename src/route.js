import React from "react";
import {Switch, Route} from "react-router-dom";
import Register from "./Components/Register/Register";
import NewTask from "./Components/NewTask/NewTask";
import Games from "./Components/Games/Games";
import Profile from "./Components/Profile/Profile";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from './Components/Login/Login'
import Account from "./Components/Account/Account" 
import EditTask from './Components/EditTask/EditTask'
import Game1 from './Components/Games/Game1'
import Game2 from './Components/Games/Game2'

export default (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path = "/account" component = {Account} />
        <Route exact path='/tasks/:taskId' component={EditTask}/>
        <Route path="/tasks" component={NewTask} />
        <Route exact path="/games" component={Games} />
        <Route path="/games/1" component={Game1}/>
        <Route path="/games/2" component={Game2}/>
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={LandingPage} />
    </Switch>
)