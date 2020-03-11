import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../App.css";

@inject("foodStore")
@observer
class MainContent extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  } //
  render() {
    const { categoryList, handleSelect } = this.foodStore;
    return (
      <>
        <Search />
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
                  onClick={() => handleSelect(list.id)}
                  to={"/category" + list.id}
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
        </Container>
      </>
    );
  }
}

export default MainContent;
