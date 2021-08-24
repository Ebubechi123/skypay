import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Image from "../../Assets/Images/undraw_completing_6bhr.svg";
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
const Login = () => {
  return (
    <>
      <div className="Login-container">
        <div className="col-1">
          <div className="col-img">
            <img src={Image} alt="login img" />
          </div>
        </div>
        <div className="col-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="form"
          >
            <Title>Login</Title>

            <label>Name :</label>
            <Input required type="text" placeholder={"Full name"} />

            <label>Registration Number :</label>
            <Input required type="text" placeholder={"Reg No"} />

            <Link to="/Home">
              <Button className="--btn-transparent --btn-radius --btn-padding"></Button>
            </Link>
            <p>
              Don't have an account?{" "}
              <Link to="/">
                <span>Sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
