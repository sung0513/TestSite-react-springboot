<<<<<<< HEAD
import React,{ Component } from 'react';
import logo from '../img/logo.jpg';
import {Button,Image} from 'react-bootstrap';
import '../App.css';
=======
import React, { Component } from "react";
import logo from "../img/logo.png";
import { Image, Navbar, Button } from "react-bootstrap";
>>>>>>> 963298b4f3ef9f61c5b10a951eba62603153e511
class Header extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
      <Image className="logo" src={logo} />
      <div>
        <Button className="Button">로그인</Button>
        <Button className="Button">회원가입</Button>
      </div>
</>
=======
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image alt="" src={logo} width="50" height="50" />
            {"   "}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Collapse />

          <Button variant="outline-light">로그인</Button>

          <Button variant="outline-light">회원가입</Button>
        </Navbar>
      </>
>>>>>>> 963298b4f3ef9f61c5b10a951eba62603153e511
    );
  }
}

export default Header;
