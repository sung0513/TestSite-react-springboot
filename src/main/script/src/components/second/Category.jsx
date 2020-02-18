import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { observer, inject } from "mobx-react";
@inject("foodStore")
@observer
class Category extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  render() {
    const { categoryList, tabKey, onClickTab } = this.foodStore;
    console.log("tabKey:" + tabKey);
    return (
      <Nav
        variant="tabs"
        activeKey={tabKey}
        onSelect={() => onClickTab(tabKey)}
      >
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
  keyID: "/all"
};

export default Category;
