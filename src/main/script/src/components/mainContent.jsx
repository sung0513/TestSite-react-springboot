import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap";
import '../App.css';
class MainContent extends Component {
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
      <Container >
      <Row>
      <Card key="0" className="card" bg="dark" style={{ width: "20rem" }}>
             <a href="/all"><Card.Img
              width="300"
              height="150" 
            /></a>
            <Card.Body>
              <Card.Title>전체보기</Card.Title>
            </Card.Body>
          </Card>
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
      </Container>
    );
  }
}

export default MainContent;
