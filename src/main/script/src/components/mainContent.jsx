import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import "../App.css";

@inject("foodStore")
@observer
class MainContent extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  render() {
<<<<<<< HEAD
    const categoryList = [
      { id: 0, name: "전체보기"},
      { id: 1, name: "치킨" },
      { id: 2, name: "피자/양식" },
      { id: 3, name: "중국집" },
      { id: 4, name: "한식" },
      { id: 5, name: "일식" },
      { id: 6, name: "족발/보쌈" },
      { id: 7, name: "분식" }
    ];
    return (
      <Container >
      <Row>
        {categoryList.map(list => (
          <Card key={list.id} className="card" bg="dark" style={{ width: "20rem" }}>
             <a href={"category"+list.id}><Card.Img
              width="300"
              height="150" src={require("../img/category"+list.id+".png")}
            /></a>
            <Card.Body>
              <Card.Title>{list.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
=======
    const { categoryList, handleSelect } = this.foodStore;
    return (
      <Container>
        <Row>
          {categoryList.map(list => (
            <Card
              key={list.id}
              className="card"
              bg="dark"
              style={{ width: "20rem" }}
            >
              <Link
                to={"category" + list.id}
                onClick={() => handleSelect(list.id)}
              >
                <Card.Img
                  width="300"
                  height="150"
                  src={require("../img/category" + list.id + ".png")}
                />
              </Link>
              <Card.Body>
                <Card.Title>{list.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
>>>>>>> f01eebc4e158b939a6256db36c1f928f1bde59ab
      </Container>
    );
  }
}

export default MainContent;
