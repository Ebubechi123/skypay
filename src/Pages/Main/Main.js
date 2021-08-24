import React from "react";
import { Route, Switch } from "react-router-dom";
import PaymentPage from "../PaymentPage/PaymentPage";
import Home from "../Home/Home";
import Account from "../Account/Account";
import Navigation, {
  BottomNav,
  TopNav,
} from "../../Components/Navigation/Navigation";

const Main = () => {
  return (
    <>
      <Navigation />
      <Route exact={true} path="/Home" component={Home} />
      <Route exact={true} path="/PaymentPage" component={PaymentPage} />
      <Route exact={true} path="/Account" component={Account} />
    </>
  );
};

export default Main;
