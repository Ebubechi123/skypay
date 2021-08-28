import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Home.css";
import { Cash, Hand, Info } from "../../Components/Icons/Icons";
import Title from "../../Components/Title/Title";
const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".welcome-msg", {
      duration: 1.1,
      opacity: 0,
      scale: 0.3,
      ease: "back",
    });
    tl.from(".transaction-history", {
      duration: 1,
      opacity: 0,
      scale: 0.3,
      ease: "back",
    });
  });
  return (
    <>
      <header>
        <div className="welcome-msg">
          <h4>
            Hi Ebubechi{" "}
            <span>
              <Hand />
            </span>
          </h4>
        </div>
      </header>

      <div className="transaction-history">
        <div className="transaction-title">
          <Title>Transaction History</Title>
          more
        </div>
        <div className="transaction-card">
          <div className="transaction-icon">
            <span>
              <Cash />
            </span>
          </div>
          <div className="transaction-description">
            <p>Payment for faculty dues</p>
          </div>
          <div className="info">
            <p>
              <Info />
            </p>
          </div>
        </div>
        <div className="transaction-card">
          <div className="transaction-icon">
            <span>
              <Cash />
            </span>
          </div>
          <div className="transaction-description">
            <p>Payment for faculty dues</p>
          </div>
          <div className="info">
            <p>
              <Info />
            </p>
          </div>
        </div>
        <div className="transaction-card">
          <div className="transaction-icon">
            <span>
              <Cash />
            </span>
          </div>
          <div className="transaction-description">
            <p>Payment for faculty dues</p>
          </div>
          <div className="info">
            <p>
              <Info />
            </p>
          </div>
        </div>
        <div className="transaction-card">
          <div className="transaction-icon">
            <span>
              <Cash />
            </span>
          </div>
          <div className="transaction-description">
            <p>Payment for faculty dues</p>
          </div>
          <div className="info">
            <p>
              <Info />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
