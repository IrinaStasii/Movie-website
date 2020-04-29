import React, { Component } from "react";
import { Link } from "react-router-dom";

import RegisterForm from "../components/login/Register-form";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <RegisterForm />
          <Link className="switch" to="/Login">
            <h5> If you do have an account, please login!</h5>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
