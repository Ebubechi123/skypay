import React from "react";
import { Link } from "react-router-dom";
import { Home, User, CreditCard } from "../Icons/Icons";
import "./Navigation.css";
export const TopNav = () => {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <h3>Sky Pay</h3>
        </div>
        <div className="nav-link">
          <ul className="nav-links">
            <li>Home</li>
            <li>Payment</li>
            <li>Account</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const BottomNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <div className="bottom-widgets">
          <Link to="/Home">
            <Home />
          </Link>
          <Link to="/PaymentPage">
            <CreditCard />
          </Link>
          <Link to="/Account">
            <User />
          </Link>
        </div>
      </div>
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
    </>
  );
};

export default Navigation;
