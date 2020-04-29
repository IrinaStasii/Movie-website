import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./Login.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.usernameRegField = React.createRef();
    this.password1RegField = React.createRef();
    this.password2RegField = React.createRef();
  }

  componentDidMount() {
    console.log("register-form-mounteed");
  }

  RegisterUser() {
    let url = `https://movies-app-siit.herokuapp.com/auth/register`;
    let username = this.usernameRegField.current.value;
    let password = this.password1RegField.current.value;
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
    // window.location.reload();
  }

  render() {
    return (
      <div className=" loginform row">
        <div className="container col">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={this.usernameRegField}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={this.password1RegField}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={this.password2RegField}
                type="password"
                placeholder="Password"
              />
            </Form.Group> */}
          </Form>
          <Link className="register" to="/Home">
            <button
              onClick={() => this.RegisterUser()}
              type="button"
              className="btn btn-dark"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
