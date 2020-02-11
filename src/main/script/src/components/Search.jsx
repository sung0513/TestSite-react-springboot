import React, { Component } from "react";
import LocationImg from "../img/location.png";
import { Image, Jumbotron, Form, InputGroup, Button } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <Jumbotron>
        <Form>
          <InputGroup>
            <Button variant="light">
              <Image src={LocationImg} width="20" height="20" />
            </Button>

            <Form.Control
              type="text"
              placeholder="Search"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Append>
              <Button variant="dark">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Jumbotron>
    );
  }
}

export default Search;
