import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";


const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Register} />
        <Route exact={true} path="/login" component={Login} />
        <Route component={Main} />
      </Switch>
    </>
  );
};

export default Routes;
