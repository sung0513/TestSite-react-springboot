import React, { Component } from "react";
import FoodImg from "../img/chicken.png";
import { Card, Row } from "react-bootstrap";
class Content extends Component {
  render() {
    const categoryList = [
      "치킨",
      "피자/양식",
      "중국집",
      "한식",
      "일식",
      "족발/보쌈",
      "분식"
    ];
    return (
      <Row>
        {categoryList.map(list => 
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FoodImg} />
            <Card.Body>
              <Card.Title>{list}</Card.Title>
            </Card.Body>
          </Card>
        )}
      </Row>
    );
  }
}

export default Content;
