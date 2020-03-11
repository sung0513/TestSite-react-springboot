import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Category from "./Category";
import Storelist from "./Storelist";
import Search from "../Search";

class SecondContent extends Component {
  render() {
    //
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
