import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "./Footer.css";
import { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="page-footer ">
        <div className="container">
          <div className="row text-center">
            <MDBContainer>
              <MDBBtn size="lg" tag="a" floating social="fb">
                <a href="https://www.facebook.com/">
                  {" "}
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBBtn>
              <MDBBtn size="lg" tag="a" floating social="tw">
                <a href="https://www.twitter.com/">
                  {" "}
                  <MDBIcon fab icon="twitter" />
                </a>
              </MDBBtn>
              <MDBBtn size="lg" tag="a" floating social="ins">
                <a href="https://www.instagram.com/">
                  {" "}
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBBtn>
              <MDBBtn size="lg" tag="a" floating social="pin">
                <a href="https://pinterest.com/">
                  {" "}
                  <MDBIcon fab icon="pinterest" />
                </a>
              </MDBBtn>
              <MDBBtn size="lg" tag="a" floating social="yt">
                <a href="https://www.youtube.com/">
                  {" "}
                  <MDBIcon fab icon="youtube" />
                </a>
              </MDBBtn>
            </MDBContainer>
          </div>
          <div className="row">
            <Link className="col col-sm text-muted" to="/About">
              <p className=" text-center">About</p>
            </Link>
            <Link className="col col-sm text-muted float-right" to="/Help">
              <p className=" text-center ">Help</p>
            </Link>
          </div>

          <hr />
          <div className="row">
            <p className="col col-sm text-center">
              &copy; {new Date().getFullYear} Movie Website | All Right Reserved
              To Saturn Team |Privacy Policy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
