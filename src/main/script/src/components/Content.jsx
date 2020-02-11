import React, { Component } from "react";
<<<<<<< HEAD
import FoodImg from "../img/chicken.png";
import { Card, Row ,Button} from "react-bootstrap";
import '../App.css';
=======
import { Card, Row, Container } from "react-bootstrap";
>>>>>>> 963298b4f3ef9f61c5b10a951eba62603153e511
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
<<<<<<< HEAD
        <div>
        {categoryList.map(list => 
          <Card className="card">
            <Card.Img variant="top" src={FoodImg} />
=======
        {categoryList.map(list => (
          <Card className="text-center" style={{ width: "20rem" }}>
            <Card.Img
              width="300"
              height="150" /*src={require("../img/category"+list.id+".png")}*/
            />
>>>>>>> 963298b4f3ef9f61c5b10a951eba62603153e511
            <Card.Body>
              <Card.Title>{list.name}</Card.Title>
            </Card.Body>
            <div className="as">
            <Button className="Button">이동</Button>
            </div>
          </Card>
<<<<<<< HEAD
        )}
        </div>
=======
        ))}
>>>>>>> 963298b4f3ef9f61c5b10a951eba62603153e511
      </Row>
      </Container>
    );
  }
}

export default Content;
