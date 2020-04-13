import React, { Component } from "react";
import LoginForm from "../components/login/Login-form";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to Login Page</h2>
          <h2> If you do not have an account, please register first!</h2>

          <LoginForm />
        </div>
      </div>
    );
  }
}
export default Login;
