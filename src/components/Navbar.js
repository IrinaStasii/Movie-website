import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";


class Navbar extends Component {
  LogoutUser() {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("username");
    // window.location.reload();
  }

  render() {
    let navbarUsername;
    let buttonLoginLogout;
    let buttonAddMovie;
    if (localStorage.getItem("access_token") != null) {
      navbarUsername = localStorage.getItem("username");
      buttonAddMovie = (<button className="btn btn-outline-light">AddMovie</button>)
      buttonLoginLogout = (
        <Link to="/Home">
          {" "}
          <button
            onClick={() => this.LogoutUser()}
            type="button"
            className="btn btn-outline-light"
          >
            {" "}
            Logout{" "}
          </button>{" "}
        </Link>
      );
    } else {
      navbarUsername = "";
      buttonLoginLogout = (
        <Link to="/Login">
          {" "}
          <button type="button" className="btn btn-outline-light">
            {" "}
            Register/Log in{" "}
          </button>{" "}
        </Link>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 ">
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            <img src={Logo} alt="Movie Website" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/All Categories"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Categories
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/ACTION">
                    ACTION
                  </Link>
                  <Link className="dropdown-item" to="/COMEDY">
                    COMEDY
                  </Link>
                  <Link className="dropdown-item" to="/SCI-FI">
                    SCI-FI
                  </Link>
                  <Link className="dropdown-item" to="/HORROR">
                    HORROR
                  </Link>
                  <Link className="dropdown-item" to="/ROMANCE">
                    ROMANCE
                  </Link>
                  <Link className="dropdown-item" to="/THRILLER">
                    THRILLER
                  </Link>
                  <Link className="dropdown-item" to="/DRAMA">
                    DRAMA
                  </Link>
                  <Link className="dropdown-item" to="/MYSTERY">
                    MYSTERY
                  </Link>
                  <Link className="dropdown-item" to="/CRIME">
                    CRIME
                  </Link>
                  <Link className="dropdown-item" to="/ANIMATION">
                    ANIMATION
                  </Link>
                  <Link className="dropdown-item" to="/ADVENTURE">
                    ADVENTURE
                  </Link>
                  <Link className="dropdown-item" to="/FANTASY">
                    FANTASY
                  </Link>

                  <Link className="dropdown-item" to="/FAMILY">
                    FAMILY
              </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Advanced Search">
                  {" "}
                  Advanced Search{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faSearch} />{" "}
                  </span>
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to="/Search">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Link>
              </li>
            </ul>
            <li className="nav-item ">{buttonLoginLogout}</li>
            <span class="navbar-text-username">
              <i class="fas fa-user"></i>
              {navbarUsername}
            </span>
            {/* <li className="nav-item ">{navbarUsername}</li> */}
            <Link to="/NewMovie">{buttonAddMovie}</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
