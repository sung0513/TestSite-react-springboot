import React, { Component } from "react";
import { Nav } from "react-bootstrap";
class Category extends Component {
  render() {
    const categoryList = [
      { id: 1, name: "치킨" },
      { id: 2, name: "피자/양식" },
      { id: 3, name: "중국집" },
      { id: 4, name: "한식" },
      { id: 5, name: "일식" },
      { id: 6, name: "족발/보쌈" },
      { id: 7, name: "분식" }
    ];
    const {keyID}=this.props;
    return (
      <Nav variant="tabs" defaultActiveKey={keyID}>
        <Nav.Item>
          <Nav.Link href="/all">전체보기</Nav.Link>
        </Nav.Item>
        {categoryList.map(list => (
          <Nav.Item key={list.id}>
            <Nav.Link eventKey={list.id}>{list.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  }
}
Category.defaultProps = {
  keyID: '/all'
};

export default Category;
