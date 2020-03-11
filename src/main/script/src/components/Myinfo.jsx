import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
class Myinfo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="email" placeholder="ID" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="자동 로그인" />
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit">
          로그인
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setState({ login: false })}
        >
          취소
        </Button>
      </Container>
    );
  }
}

export default Myinfo;
