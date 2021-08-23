import React from 'react';
import { Route } from 'react-router-dom';
import Account from '../Pages/Account/Account';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PaymentPage from '../Pages/PaymentPage/PaymentPage';

const Routes = () => {
    return ( <>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/Home" component={Home} />
            <Route exact={true} path="/PaymentPage" component={PaymentPage} />
            <Route exact={true} path="/Account" component={Account} />
            </> 
            
    );
}
 
export default Routes;