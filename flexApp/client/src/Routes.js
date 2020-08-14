import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";
import Tss from "./Tss";
import Projects from "./Projects";
import SignIn from "./SignIn";
import Users from "./Users";

class Routes extends Component {
  render() {
  
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => <SignIn {...routeProps} />}
        />
        <Route
          exact
          path='/main'
          render={routeProps => <Main {...routeProps} />}
        />
        <Route
          exact
          path='/tss'
          render={routeProps => <Tss {...routeProps} />}
        />
        <Route
          exact
          path='/projects'
          render={routeProps => <Projects {...routeProps} />}
        />
        <Route
          exact
          path='/users'
          render={routeProps => <Users {...routeProps} />}
        />
        <Redirect to='/' />
      </Switch>
    );
  }
}
export default Routes;
