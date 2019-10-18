import React from "react";
import {Switch, Route} from "react-router-dom";
import Register from "./Components/Register/Register";
import NewTask from "./Components/NewTask/NewTask";
import Games from "./Components/Games/Games";
import Profile from "./Components/Profile/Profile";
import Landingpage from "./Components/Landingpage/Landingpage";

export default (
    <Switch>
        <Route path="/register" component={Register} />
        <Route path="/tasks" component={NewTask} />
        <Route path="/games" component={Games} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/" component={Landingpage} />
    </Switch>
)