import React, { Component } from "react";
import { Card, Image, Row, Container } from "react-bootstrap";
import { observer, inject } from "mobx-react";
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
    const { tabkey, storeList, selectList } = this.foodStore;
    return (
      <Container className="cont">
        <Row>
          {storeList.map(item => (
            <Card key={item.name} className="card2">
              <Link to="/third" onClick={() => selectList(item)}>
                <Card.Body>
                  <Row>
                    <Image
                      src={require("../../img/category" + tabkey + ".png")}
                      width="70"
                    />
                    <b>
                      {item.name}
                      <br />
                      {item.tel}
                    </b>
                  </Row>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Storelist;
