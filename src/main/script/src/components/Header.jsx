import React, { Component } from "react";
import logo from "../img/logo.png";
import { Image, Navbar, Button, Modal } from "react-bootstrap";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: false
    };
  }
  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  render() {
    const { login, register } = this.state;
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <Image alt="" src={logo} width="50" height="50" />
            {"   "}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Collapse />
          <div className="button1">
            <Button
              variant="outline-light"
              onClick={() => this.setState({ login: true })}
            >
              로그인
            </Button>
          </div>
          <div className="button2">
            <Button
              variant="outline-light"
              onClick={() => this.setState({ register: true })}
            >
              회원가입
            </Button>
          </div>
        </Navbar>
        <Modal show={login} onHide={() => this.setState({ login: false })} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>로그인</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ login: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={register}
          onHide={() => this.setState({ register: false })}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>회원가입</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ register: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Header;
