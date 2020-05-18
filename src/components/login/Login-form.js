import React, { Component } from "react";

import { Form } from "react-bootstrap";

import "./Login.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
  }

  componentDidMount() {
    console.log("login-form-mounteed");
  }
  LoginUser() {
    let url = `https://movies-app-siit.herokuapp.com/auth/login`;
    let username = this.usernameField.current.value;
    let password = this.passwordField.current.value;
    console.log(username);
    console.log(password);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ username: username, password: password });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.accessToken !== undefined) {
          console.log(result.authenticated, result.accessToken);
          window.localStorage.setItem("access_token", result.accessToken);
          window.localStorage.setItem("username", username);
          this.props.history.push("/");
        }
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className=" loginform row mx-auto">
        <div className="container col">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={this.usernameField}
                type="email"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={this.passwordField}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
          </Form>

          <button
            type="button"
            className="btn btn-light"
            onClick={() => this.LoginUser()}
          >
            Login
          </button>
        </div>
        <div></div>
      </div>
    );
  }
}
export default LoginForm;
