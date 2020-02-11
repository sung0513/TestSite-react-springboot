import React, { Component } from "react";
import LocationImg from "../img/location.png";
import { Image, Jumbotron, Form, InputGroup, Button } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <Jumbotron>
        <div className="search">
        <Form>
          <InputGroup>
            <Button variant="light">
              <Image src={LocationImg} width="20" height="20" />
            </Button>

            <Form.Control
              type="text"
              placeholder="주소입력"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Append>
              <Button variant="dark">검색</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        </div>
      </Jumbotron>
    );
  }
}

export default Search;
