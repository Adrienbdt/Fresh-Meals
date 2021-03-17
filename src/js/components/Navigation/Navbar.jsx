import React from "react";
import { render } from "react-dom";

import { Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../../../img/logo.png";
import icon from "../../../img/user.png";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FoodNavbar(props) {
  return (
    <Navbar className="navTop">
      <span className="navTop_left">
        <span className="logo">
          <Image src={logo} className="logo" />
        </span>
      </span>
      <span className="navTop_center">
        <Nav className="auto">
          <Navbar.Brand href="#">{props.title}</Navbar.Brand>

          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Get Involved</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
      </span>
      <span className="navTop_right">
        <Nav.Link href="#" id="log_link">
          <FontAwesomeIcon icon={faUser} className="user_icon" />
          <span id="login">Login</span>
        </Nav.Link>
      </span>
    </Navbar>
  );
}
