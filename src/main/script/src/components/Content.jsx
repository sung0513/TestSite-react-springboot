import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap";
class Content extends Component {
  render() {
    const categoryList = [
      { id: 1, name: "치킨" },
      { id: 2, name: "피자/양식" },
      { id: 3, name: "중국집" },
      { id: 4, name: "한식" },
      { id: 5, name: "일식" },
      { id: 6, name: "족발/보쌈" },
      { id: 7, name: "분식" }
    ];
    return (
      <Container>
      <Row>
        {categoryList.map(list => (
          <Card className="text-center" style={{ width: "20rem" }}>
            <Card.Img
              width="300"
              height="150" /*src={require("../img/category"+list.id+".png")}*/
            />
            <Card.Body>
              <Card.Title>{list.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
      </Container>
    );
  }
}

export default Content;
