import React, { Component } from "react";
import { Card, Image, Row, Container } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import logo from "../../img/category1.png";
import { Link } from "react-router-dom";
@inject("foodStore")
@observer
class Storelist extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  render() {
    const { tabkey, categoryList } = this.foodStore;
    return (
      <Container className="cont">
        <Row>
          <Card className="card2">
            <Link to="/third">
              <Card.Body>
                <Row>
                  <Image src={logo} width="70" />
                  <b>음식점 이름</b>
                </Row>
              </Card.Body>
            </Link>
          </Card>
          <Card className="card2">
            <Card.Body>
              <Row>
                <Image src={logo} width="70" />
                <b>음식점 이름</b>
              </Row>
            </Card.Body>
          </Card>

          <Card className="card2">
            <Card.Body>
              <Row>
                <Image src={logo} width="70" />
                <b>음식점 이름</b>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Storelist;
