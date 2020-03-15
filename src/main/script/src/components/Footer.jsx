import React, { Component } from "react";
import { IoMdRestaurant, IoIosRestaurant } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="secondary" variant="dark">
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
          <MdRestaurant />
          <IoMdRestaurant />
          <IoIosRestaurant />
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
