import React, { Component } from "react";
import FoodImg from "../img/chicken.png";
import { Card, Row ,Button} from "react-bootstrap";
import '../App.css';
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
        <div>
        {categoryList.map(list => 
          <Card className="card">
            <Card.Img variant="top" src={FoodImg} />
            <Card.Body>
              <Card.Title>{list}</Card.Title>
            </Card.Body>
            <div className="as">
            <Button className="Button">이동</Button>
            </div>
          </Card>
        )}
        </div>
      </Row>
    );
  }
}

export default Content;
