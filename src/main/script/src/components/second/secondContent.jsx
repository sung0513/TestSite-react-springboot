import React, { Component } from "./node_modules/react";
import { Row } from "./node_modules/react-bootstrap";
import Category from "./secCategory";
import Storelist from "./Storelist";

class SecondContent extends Component {
  //test
  render() {
    return (
      <>
        <Category />
        <Row>
          <Storelist />
        </Row>
      </>
    );
  }
}



export default SecondContent;
