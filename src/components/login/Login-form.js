import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./Login.css";

class LoginForm extends Component {
  render() {
    return (
      <div className=" loginform row">
        <div className="container col">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Link className="register" to="/Home">
            <button type="button" className="btn btn-dark">
              Register
            </button>
          </Link>
        </div>

        {/* Login */}
        <div className="container col">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Link className="register" to="/Home">
            <button type="button" className="btn btn-dark center">
              Log in
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default LoginForm;
