import React, { Component } from "react";
import {Row} from 'react-bootstrap';
import Category from "./Category";
import Storelist from "./Storelist";

class SecondContent extends Component {

  render() {
    const {keyID}=this.props;
    return( 
    <>

    <Category keyID={keyID}/>
    <Row>
    <Storelist />
    </Row>
      </>
      );
  }
  
}



export default SecondContent;
