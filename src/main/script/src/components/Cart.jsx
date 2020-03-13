import React, { Component } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
class Cart extends Component {
  render() {
    return (
      <Row>
        <Card className="order">
          <Card.Header as="h5">주문표</Card.Header>
          <Card.Body>
            <Card.Text>
              <hr />
              <b>총합: </b> 원
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {" "}
            <Button variant="dark">주문하기</Button>
          </Card.Footer>
        </Card>
      </Row>
    );
  }
}

export default Cart;
