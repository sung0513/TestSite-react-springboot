import React, { Component } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Modal
} from "react-bootstrap";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import log1 from "../../img/category1.png";
import log2 from "../../img/category2.png";
import log3 from "../../img/category3.png";
import { observer, inject } from "mobx-react";
@inject("foodStore")
@observer
class Storeinfo extends Component {

  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
    this.state={
      order:false
    };
  }
  
  render() {
    //test
    const {
      selectedList,
      selectedMenu,
      putItem,
      takeItem,
      total
    } = this.foodStore;
    const{order}=this.state;
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Row>
              <Card className="card2">
                <Card.Body>
                  <Row>
                    <img src={log1} width="70" />

                    <b>
                      {selectedList.name}
                      <br />
                      {selectedList.tel}
                    </b>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={log1}
                    alt="First slide"
                    height="150"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={log2}
                    alt="Third slide"
                    height="150"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={log3}
                    alt="Third slide"
                    height="150"
                  />
                </Carousel.Item>
              </Carousel>
            </Row>
            <Row>
              <ListGroup style={{ width: "1000px" }}>
                {selectedList.menu.map(item => (
                  <ListGroup.Item
                    key={item.name}
                    onClick={() => putItem(item.name, item.price)}
                  >
                    {item.name}
                    <br />
                    {item.price}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Row>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Card style={{ width: "18rem", height: "400px", color: "black" }}>
              <Card.Header as="h5">주문표</Card.Header>
              <Card.Body>
                <Card.Text>
                  {selectedMenu.map(item => (
                    <div>
                      {item.name} {item.price}원 {item.count}{" "}
                      <IoMdRemoveCircleOutline
                        onClick={() => takeItem(item.name)}
                      />
                    </div>
                  ))}
                  <hr />
                  <p>
                    <b>총합: {total}</b> 원
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {" "}
                <Button variant="dark"onClick={() => this.setState({ order: true })} >주문하기</Button>
                <Modal show={order} onHide={() => this.setState({ order: false })}>

        <Modal.Body>
          주문하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setState({ order: false })}>
            주문
          </Button>
          <Button variant="primary" onClick={() => this.setState({ order: false })}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Storeinfo;
