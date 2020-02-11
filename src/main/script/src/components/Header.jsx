
import React, { Component } from "react";
import logo from "../img/logo.png";
import { Image, Navbar, Button } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image alt="" src={logo} width="50" height="50" />
            {"   "}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Collapse />
          <div className="button1">
          <Button variant="outline-light">로그인</Button>
          </div>
          <div className="button2">
          <Button variant="outline-light">회원가입</Button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
