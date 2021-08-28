import React from "react";
import { Link } from "react-router-dom";
import "./Regsiter.css";
import Image from "../../Assets/Images/undraw_exploring_1l7f.svg";
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Register = () => {
  return (
    <>
      <div className="Register-container">
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
            <Title>Sign Up</Title>

            <label>Name :</label>
            <Input required type="text" placeholder={"Full name"} />

            <label>E-mail :</label>
            <Input required type="email" placeholder={"Your E-mail"} />

            <label>Registration Number :</label>
            <Input required={true} type="text" placeholder={"Reg No"} />

            <Link to="/Home">
              {" "}
              <Button className="--btn-transparent --btn-radius --btn-padding">
                Sign Up
              </Button>
            </Link>

            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
