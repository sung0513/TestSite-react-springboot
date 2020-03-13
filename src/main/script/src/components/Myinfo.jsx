import React, { Component } from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
class Myinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 1
    };
  }
  render() {
    const { mode } = this.state;
    return (
      <>
      {mode === 1 ? (
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

        <Button variant="primary" type="submit" onClick={() => this.setState({ mode: mode === 1 ? 2 : 1 })}>
          로그인
        </Button>
        <Button variant="secondary">취소</Button>
      </Container>
      ) : ( 
        <Table striped bordered hover variant="dark">
          <tbody>
          <tr>
            <th>아이디</th>
            <td>ㅇㅇ</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>ㅇㅇ</td>
          </tr>
          <tr>
            <th>프로필</th>
            <td>ㅇㅇ</td>
          </tr>
          <tr>
            <th>이름</th>
            <td>ㅇㅇ</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>ㅇㅇ</td>
          </tr>
        </tbody>
      </Table>
      )}
      </>
    );
  }
}

export default Myinfo;
