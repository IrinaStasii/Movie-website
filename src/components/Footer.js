import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="page-footer ">
      <div className="container">
        <div className="row text-center">
          <MDBContainer>
            <MDBBtn size="lg" tag="a" floating social="fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="tw">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="ins">
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="pin">
              <MDBIcon fab icon="pinterest" />
            </MDBBtn>
            <MDBBtn size="lg" tag="a" floating social="yt">
              <MDBIcon fab icon="youtube" />
            </MDBBtn>
          </MDBContainer>
        </div>
        <div className="row">
          <p className="col col-sm text-center">About</p>
          <p className="col col-sm text-center">Help</p>
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
};

export default Footer;
