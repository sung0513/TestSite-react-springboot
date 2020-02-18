import React, { Component } from "react";
import {Row} from 'react-bootstrap';
import Category from "./Category";
import Storelist from "./Storelist";

class secondContent extends Component {
  render() {
    return( 
    <>
    <Category/>
    <Row>
    <Storelist />
    </Row>
      </>
      );
  }
  
}

export default secondContent;
